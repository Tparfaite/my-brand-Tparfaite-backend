import express from "express";
import UserController from "../controller/userController";
import verifyToken from "../middleWare/authenticate";

const UserRoute=express.Router();

UserRoute.post("/createUser",UserController.createUser);
UserRoute.get("/getAllUsers",verifyToken,UserController.getUsers);
UserRoute.get("/getOneUser/:id",verifyToken, UserController.getSingleUser);
UserRoute.get("/deleteUser/:id",verifyToken,UserController.deleteUser);
UserRoute.post("/login",UserController.login);

export default UserRoute;