import multer from "multer";
import path from "path";

const upload=multer({
    storage:multer.diskStorage({}),
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    },
    fileFilter:(req,file,cb)=>{
        const extention=path.extname(file.originalname);
        
        if(!extention==".png" && !extention==".jpg" && !extention==".jpeg"){
            cb(new Error("unsuported format",false));
            return;
        }
        cb(null,true)
    }
    
})


export default upload