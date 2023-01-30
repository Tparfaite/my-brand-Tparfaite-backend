import express from "express";
import UserController from "../controller/userController";
import verifyToken from "../middleWare/authenticate";

const UserRoute=express.Router();

UserRoute.post("/createUser",UserController.createUser);
UserRoute.get("/getAllUsers",verifyToken,UserController.getUsers);

export default UserRoute;