import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    firstName:{
        type:String,
       
    },
    lastName:{
        type:String,
        
    },
    email:{
        type:String,
       
    },
    password:{
        type:String,
       
    },
    role:{
        type:String,
        default:"user"
    }

}, {timestamps:true });

const User=mongoose.model("User",userSchema);

export default User;


