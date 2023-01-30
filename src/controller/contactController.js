import Contact from "../models/contactModel";

class ContactController {

    static async CreateMessage(req,res) {
        try{
            const messages= new Contact({
                email:req.body.email,
                fullName:req.body.fullName,
                contact:req.body.contact,
                message:req.body.message
            });
            await messages.save();
            res.status(200).json({
                "status":"success",
                "post":messages
            });
            console.log("Message created");

        }
        catch(error){
          res.status(400).json({
            "status":"error",
            "message":error.message
          });
        }
    }

    static async getMessages(req,res) {
        try{
          const messages=await Contact.find();
          res.status(201).json({
            status:"success",
            data:{
                "posts":messages
            }
          })
        }
        catch(error){
         res.status(401).json({
            "status":"error",
            "message":error.message
         });
        }
    }

    static async getSingleMessage(req,res){
        try{
          const message=await Contact.findOne({id:req.params.id});
          res.status(200).json({
            "status":"success",
            "data":{
                "post":message
            }
          })
        }
        catch(error){
         res.status(400).json({
            "status":"error",
            "message":error.message
         });

        }
    }

    static async deleteMessage(req,res){
        try{
            await Contact.findByIdAndDelete(req.params.id);
            res.status(200).json({
                "status":"success",
                "message":"message deleted successfully"
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

export default ContactController;