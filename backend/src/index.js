import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import mongoose from "mongoose";
import authRoutes from "./routes/auth.routes.js"

dotenv.config();
const app=express();

const PORT=process.env.PORT || 5000;
app.use(cors()); // allows react frontend to call backend api 
                 // without this browser blocks requests
app.use(express.json()); // allow backend to read json from requests

app.use("/api/auth",authRoutes);

app.get("/",(req,res)=>{
    res.send("MockMate AI is running ");
});