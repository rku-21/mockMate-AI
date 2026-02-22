import express from "express";
import dotenv from "dotenv";
import cors from "cors"
// import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js"
import { connectDB } from "./lib/db.js";
dotenv.config();
console.log("MONGODB_URI:", process.env.MONGODB_URI);
const app=express();
app.use(express.json());

app.use(cookieParser());

const PORT=process.env.PORT || 5000;
app.use(cors({
    origin:process.env.NODE_ENV==="production"?true:"http://localhost:3000",
    credentials:true,
})) 

app.use("/api/auth",authRoutes);


app.get("/",(req,res)=>{
    res.send("MockMate AI is running ");
});
app.listen(PORT, ()=>{
    console.log(`server is listening to the ${PORT}`);
    connectDB().catch(err=>{
        console.log('Database connection failed',err.message);
    });
});