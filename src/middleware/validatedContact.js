
import contactValidationSchema from "../validation/contactValidation";

const validatedContact=(req,res,next)=>{
    const {error,value}= contactValidationSchema.validate(req.body, {abortEarly:false});
    if(error){
        res.status(400).json({
            "status":"error",
            "message":error.message
        })
    }
    res.validContact=value;
    next();
};

export default validatedContact;