import express from "express";
import ContactController from "../controller/contactController";
import validatedContact from "../middleWare/validatedContact";
import verifyToken from "../middleWare/authenticate";

const ContactRoute=express.Router();

ContactRoute.post("/createMessage", validatedContact,ContactController.CreateMessage);
ContactRoute.get("/getAllMessages",verifyToken,ContactController.getMessages);
ContactRoute.get("/getSingleMessage/:id",verifyToken,ContactController.getSingleMessage);
ContactRoute.get("/deleteMessage/:id",verifyToken,ContactController.deleteMessage);

export default ContactRoute;