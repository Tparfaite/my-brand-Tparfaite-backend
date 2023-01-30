import express from "express";
import BlogController from "../controller/blogController";
// import validatedBlog from "../middleware/validatedBlog";
import verifyToken from "../middleWare/authenticate";
import upload from "../upload/multer";


const BlogRoute=express.Router();

BlogRoute.post("/createBlog",verifyToken,upload.single('blogImage'),BlogController.createBlog);
BlogRoute.get("/getAllBlogs",BlogController.retrieveAllBlog);
BlogRoute.get("/getOneBlog/:id",BlogController.getSingleBlog);
BlogRoute.get("/deleteBlog/:id",verifyToken,BlogController.deleteBlog);

export default BlogRoute;
