import User from "../models/UserModel";


const isAdmin=async (req,res,next)=>{
    try{
        const adminRight=await User.findOne({_id:req.user._id,role:"admin"});

        if(!adminRight){
            return res.status(401).json({
                status:"not admin",
                message:"only admin is allowed"
            })
        }
        next();

    }
    catch(error){
      res.status(402).json(error)
    }

};


const findUser=async (req,res,next)=>{
    try{
        const user=await User.findById(req.params.id);

        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        req.user = user;
        next();

    }
    catch(error){
      res.status(405).json({
       "message":error.message
    });
    }
};


export {isAdmin,findUser}
