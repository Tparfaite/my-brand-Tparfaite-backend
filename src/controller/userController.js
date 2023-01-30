import User from "../models/UserModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";



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



    static async getSingleUser(req,res){
        try{
            const user= await User.findOne({id:req.params.id});
            res.status(200).json({
                "status":"success",
                "data":{
                    "post":user
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


    static async deleteUser(req,res){
        try{
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json({
                "status":'success',
                "message":"The user deleted successfully!"
            })

        }
        catch(error){
            res.status(404).json({
                "status":"error occured",
                "message":error.message
            })
        }
    }


}

export default UserController;
