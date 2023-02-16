import userValidationSchema from "../validation/userValidation";



const validatedUser=(req,res,next)=>{
const {error,value}= userValidationSchema.validate(req.body, {abortEarly:false});
 if(error){
    return res.status(400).json({
        "status":"error",
        "message":error.message
    })
 }
 req.validUser=value;
//  console.log(req);
 next();
}

export default validatedUser;