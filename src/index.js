import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import dbConnect from "./database/db";

mongoose.set('strictQuery',true);


const app=express();

app.use(cors({origin:"*", methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']}));

app.use(express.json());
dotenv.config();

const port=process.env.PORT ? process.env.PORT:3005;
app.listen(port,()=>{
    console.log(`server is listening port ${port}`);
})

dbConnect();