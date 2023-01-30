import User from "../models/UserModel";
import bcrypt from "bcrypt";



class UserController {

    static async createUser(req,res){
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(req.body.password,salt)
        try{

         const user= new User({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            password:hashedPassword
         })
         await user.save();
         res.status(200).json({
            "status":"successful created",
            "post":user
         });
         console.log("user created successfully");
        }
        catch(error){ 
            res.status(404).json({
                "status":"error",
                "message":error.message
            })
        }
    }
    

    static async getUsers(req,res){
        try{
        
            const users= await User.find();
            res.status(201).json({
                status:"success",
                message:{
                    "post":users
                }
            })
        }
        catch(error){
            res.status(404).json({
                "status":"error",
                "message":error.message
            })
        }
    }


}

export default UserController;
