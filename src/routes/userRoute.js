import express from "express";
import UserController from "../controller/userController";
import verifyToken from "../middleWare/authenticate";
import validatedUser from "../middleware/validatedUser";
import { findUser,isAdmin } from "../middleware/isAdmin";

const UserRoute=express.Router();

UserRoute.post("/createUser",validatedUser,UserController.createUser);
UserRoute.get("/getAllUsers",UserController.getUsers);
UserRoute.get("/getOneUser/:id", UserController.getSingleUser);
UserRoute.delete("/deleteUser/:id",UserController.deleteUser);
UserRoute.post("/login",UserController.login);

export default UserRoute;