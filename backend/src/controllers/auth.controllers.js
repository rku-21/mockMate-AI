import User from "../models/user.model.js";
import generateToken from "../lib/utlis.js";
import bcrypt from "bcryptjs";

export const login=async(req,res)=>{
    const {email,password}=req.body;
    if(!email || !password){
        return res.status(401).json({
            message:"please provide credentials"
        });
    }
    const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmail = emailRegex.test(email);
    
    let user;
    if(isEmail){
        user = await User.findOne({email:email});
    } else {
        user = await User.findOne({username: email.trim().toLowerCase()});
    }
    
    if(!user){
        return res.status(400).json({
            message:"Invalid credentials"
        });
    }
    const passwordMatch=await bcrypt.compare(password,user.password);
    if(!passwordMatch){
        return res.status(400).json({
            message:"Invalid Password"
        });
    }

    const token=generateToken(user.id,res);
        return res.status(200).json({
        message: "Login successfully",
        user: {
            _id: user._id,
            email: user.email,
            username: user.username,
            profilePicture: user.profilePicture || "",
        }
        });
}
export const signup=async(req,res)=>{
    const {username,email,password,profilePicture}=req.body;

    try{
        if(!email || !username || !password){
            return res.status(400).json({
                message:"No credentials provided"
            });
        }
        if(password.length<6){
            return res.status(400).json({
                message:"password must be > 6 char"
            });
        }
        const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            return res.status(400).json({
                message:"Invalid email fromat",
            });
        }
        const existingUser=await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                message:"user alredy exist with this emial"
            });
        }
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);

        const newUser=new User({
            email:email,
            username:username,
            password:hashedPassword,
            profilePicture:profilePicture || ""
        });

        await newUser.save();
        generateToken(newUser._id,res);

        return res.status(200).json({
            message:"signup successfully",
            user:{
                _id:newUser._id,
                email:newUser.email,
                username:newUser.username,
                profilePicture:newUser.profilePicture || "",
            }
        })


    }
    catch(error){
        return res.status(500).json({
            message:`${error.message}`,
        });
    }

}
export const checkAuth=async(req,res)=>{
    try{
        return res.status(200).json({
            message:"auth works",
            user:req.user
        })
    }
    catch(error){
        return res.status(500).json({
            message:"Internal server error"
        });
    }
}
export const logout=(req,res)=>{
    try {
        res.cookie("jwt","",{maxAge:0});
       return res.status(200).json({message:"logout successfully"});
    }
    catch(error){
        return res.status(500).json({message:"Internal server Error"});
    }
}