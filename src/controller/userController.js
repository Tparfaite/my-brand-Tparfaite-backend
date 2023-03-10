import User from "../models/UserModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();



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

         res.status(201).json({
            "status":"successful created",
            "post":user
         });
         console.log("user created successfully");
        }
        catch(error){ 
            console.log("error",error);
            res.status(404).json({
                "status":"error",
                "message":error.message
            })
        }
    }


    static async getUsers(req,res){
        try{
        
            const users= await User.find();
            res.status(200).json({
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
            res.status(204).json({
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



    static async login(req,res){
        try{
            const user=await User.findOne({email:req.body.email});
            if(!user){
                res.status(404).json({
                    "status":"error",
                    "message":"user not found"
                });

            }
            const isMatch= await bcrypt.compare(req.body.password,user.password);
            if(!isMatch){
                res.status(404).json({
                    "status":"error",
                    "message":"password don't match"
                })
            }

            const token=jwt.sign({id:user._id}, process.env.JWT_SECRET, {expiresIn:"3h"});
            res.status(200).json({
                "status":"success",
                data:user,
                token:token
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
