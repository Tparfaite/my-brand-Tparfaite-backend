import express from "express";
import adminController from "../controller/adminController";
import verifyToken from "../middleware/authenticate";
import validatedUser from "../middleware/validatedUser";


const AdminRoute=express.Router();

AdminRoute.post("/createAdmin",validatedUser,adminController.createAdmin);

export default AdminRoute;