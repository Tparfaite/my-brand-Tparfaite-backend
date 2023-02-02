import express from "express";
import BlogController from "../controller/blogController";
// import validatedBlog from "../middleware/validatedBlog";
import verifyToken from "../middleWare/authenticate";
import upload from "../upload/multer";
import { isAdmin,findUser } from "../middleware/isAdmin";


const BlogRoute=express.Router();

BlogRoute.post("/createBlog/:id",verifyToken,findUser,isAdmin,upload.single('blogImage'),BlogController.createBlog);
BlogRoute.get("/getAllBlogs",BlogController.retrieveAllBlog);
BlogRoute.get("/getOneBlog/:id",BlogController.getSingleBlog);
BlogRoute.get("/deleteBlog/:id",verifyToken,findUser,isAdmin,BlogController.deleteBlog);
BlogRoute.put("/updateBlog/:id",verifyToken,upload.single('blogImage',BlogController.updateBlog));

export default BlogRoute;
