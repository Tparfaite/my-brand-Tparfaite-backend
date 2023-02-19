import express from "express";
import ContactController from "../controller/contactController";
import validatedContact from  '../middleware/validatedContact'
import verifyToken from "../middleware/authenticate";

const ContactRoute=express.Router();

ContactRoute.post("/createMessage", validatedContact,ContactController.CreateMessage);
ContactRoute.get("/getAllMessages",verifyToken,ContactController.getMessages);
ContactRoute.get("/getSingleMessage/:id",verifyToken,ContactController.getSingleMessage);
ContactRoute.delete("/deleteMessage/:id",ContactController.deleteMessage);

export default ContactRoute;