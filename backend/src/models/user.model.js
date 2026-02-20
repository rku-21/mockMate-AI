import mongoose from "mongoose"
const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:true,
        minlength:6,
    },
    profilePicture:{
        type:String,
        default: "",
    },
},
{
    timestamps:true,
});

const User=mongoose.models.User || mongoose.model("User",userSchema);
export default User;