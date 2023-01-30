import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import dbConnect from "./database/db";
import ContactRoute from "./routes/contactRoute";
import UserRoute from "./routes/userRoute";
import BlogRoute from "./routes/blogRoute";

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

app.use("/api",ContactRoute);
app.use("/api",UserRoute);
app.use("/api",BlogRoute);

console.log("My brand project backend");