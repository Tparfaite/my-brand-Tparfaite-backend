import mongoose from "mongoose";

const blogSchema=mongoose.Schema({
    blogTitle:{
        type:String,
     
    },
    blogAuthor:{
        type:String,
       
    },
    blogImage:{
       type:String,
       
    },
    blogComments:{
        type:String
    },
    blogContent:{
        type:String,
       
    }
}, {timestamps:true });

const Blog=mongoose.model("Blog",blogSchema);

export default Blog;