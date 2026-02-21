import {create} from "zustand";
import { axiosInstance } from "../lib/axios";
import toast  from "react-hot-toast";
const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001" : "/";

export const useAuthStore=create((set,get)=>({
    authUser:null,
    isSigningup:false,
    isLoginingup:false,
    isCheckingAuth:true,

    checkAuth:async()=>{
        try{
            set({isCheckingAuth:true});
            const res=await axiosInstance.get("/auth/check");
            console.log(res.data);
            set({authUser:res.data});
        }
        catch(error){
            set({authUser:null});
        }finally{
            set({isCheckingAuth:false});
        }
    },
    signup:async(data)=>{
        set({isSigningup:true});
        try{
            const res=await axiosInstance.post("/auth/signup", data); 
            set({authUser:res.data});
            toast.success("Account created successfully");
        }catch(error){
            toast.error(error.response?.data?.message || "signup failed");
        }
        finally{
            set({isSigningup:false});
        }
    },
    login:async(data)=>{
        set({isLoginingup:true});
        try{
            const res=await axiosInstance.post("/auth/login",data);
            set({authUser:res.data});
            toast.success("Logged in successfully");
        }
        catch(error){
            toast.error(error.response?.data?.message || "Login failed");
        }
        finally{
            set({isLoginingup:false});
        }
    },
    logout: async ()=>{
        try {
            await axiosInstance.post("/auth/logout")
            set({authUser:null});
            toast.success("Logout successfully");
        }
        catch(error){
            toast.error("some error occured try again !");
            console.log(error.message);
        }
    }
}));