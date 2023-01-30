import jwt from "jsonwebtoken";

const verifyToken=(req,res,next)=>{
  try{
    const authHeader=req.headers.token;
    if(!authHeader){
        return res.status(404).json({message:"unauthorized"});
    }
    const token=authHeader.split(' ')[1];
    const decodes=jwt.verify(token, process.env.JWT_SECRET);
    req.user=decodes;
    next();
  }
  catch(error){
  res.status(401).json({
    message:"unauthorised"
  });
  }
}

export default verifyToken;
