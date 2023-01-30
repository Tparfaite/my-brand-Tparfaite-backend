import blogValidationSchema from "../validation/blogValidation";

const validatedBlog=(req,res,next)=>{
  const {error,value}=blogValidationSchema.validate(req.body, {abortEarly:false});
  if(error){
    res.status(400).json({
        "status":"error",
        "message":error.message
    })
  }
  req.validBlog=value;
  next();
};

export default validatedBlog;


