import User from "../models/UserModel";
import bcrypt from "bcrypt";


class adminController {

    static async createAdmin(req,res){
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(req.body.password,salt)
        try{

         const user= new User({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            password:hashedPassword,
            role:"admin"
         })
         await user.save();
         res.status(201).json({
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

}

export default adminController;