import express from "express";
import UserController from "../controller/userController";

const UserRoute=express.Router();

UserRoute.post("/createUser",UserController.createUser);

export default UserRoute;