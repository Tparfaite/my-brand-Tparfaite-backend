import Blog from "../models/BlogModel";
import cloudinary from "../upload/cloudinary";



class BlogController {

    static async createBlog(req,res){
        try{
            
            const result= await cloudinary.uploader.upload(req.file.path);
            console.log(result)
            const blog=new Blog({
                blogTitle:req.body.blogTitle,
                blogAuthor:req.body.blogAuthor,
                blogImage:result.secure_url,
                blogContent:req.body.blogContent,
                blogComments:req.body.blogComments
            });

            console.log(blog);
            await blog.save();
            res.status(201).json({
                "status":"success",
                "post":blog
            })
        }
        catch(error){
         res.status(401).json({
            "status":"error",
            "message":error.message
         })
        }
    }

   static async retrieveAllBlog(req,res){
    try{
       
        const blogs=await Blog.find();
        res.status(200).json({
            "status":"success",
            "data":{
                "post":blogs
            }
        })
    }
    catch(error){
     res.status(404).json({
        "status":"error",
        "message":error.message
     });
    }
   }


   static async getSingleBlog(req,res){
    try{
      const blog=await Blog.findOne({id:req.param.id});
      res.status(201).json({
        "status":"success",
        "data":{
            "post":blog
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

   static async deleteBlog(req,res){
    try{
        await Blog.findByIdAndDelete(req.params.id);
        res.status(200).json({
            "status":"success",
            "message":"blog deleted successfully"
        })

    }
    catch(error){
        res.status(404).json({
            "status":"error",
            "message":error.message
        });
    }
   }

   static async updateBlog(req,res){

    try {
        const blog = await Blog.findById(req.params.id);
        await cloudinary.uploader.destroy(blog.blogImage);
        const result = await cloudinary.uploader.upload(req.file.path);
        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id,{$set:{
            blogTitle:req.body.blogTitle,
            blogAuthor:req.body.blogAuthor,
            blogImage:result.secure_url,
            blogContent:req.body.blogContent,
        }},{new:true});
        res.status(200).json({
          status:"success",
          data:updatedBlog
        });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }

}

export default BlogController;