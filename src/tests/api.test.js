import chai, { should } from "chai";
import request from "supertest";
import app from "../index";
import bcrypt from "bcrypt";
import chaiHttp from "chai-http";
import dotenv from "dotenv";
import User from "../models/UserModel";
import Contact from "../models/contactModel";
import Blog from "../models/BlogModel";



dotenv.config();

chai.use(chaiHttp);
chai.should();

const expect=chai.expect;

let token;
let id;


beforeEach(async ()=>{
    await User.deleteMany({});

    const admin=await new User({
        firstName:"parfaite",
        lastName:"Twagira",
        email:"parfaite@gmail.com",
        password:await bcrypt.hash("perfect",10),
        role:"admin"
    });

    await admin.save();

    const log= await request(app).post("/api/login").send({
        email:"parfaite@gmail.com",
        password:"perfect"
    });
    token=log.body.token;

})


describe("user api",()=>{
    it("should create user",(done)=>{
        request(app).post("/api/createUser").send({
            firstName:"parfaite",
            lastName:"twagira",
            email:"parfaite@gmail.com",
            password:"perfect"
        })
        .end((error,res)=>{

      expect(res).to.have.status(201);
      expect(res.body.post).to.be.a('object');
      done();

        })
    });

    it("it should get all users",(done) => {

        request(app).get("/api/getAllUsers").set('token', `Bearer ${token}`).end((error,res)=>{
          
            expect(res).to.have.status(200);
            expect(res.body.message).to.be.a('object');
            done();
        
        })
    });



    it("it should get user by id", (done) => {

        const user=new  User({
            firstName:"keza",
            lastName:"kelly",
            email:"keza@gmail.com",
            password: bcrypt.hash("keza",10)
        })
        user.save();
        id=user._id;
         
        request(app).get(`/api/getOneUser/${id}`)
        .set('token',`Bearer ${token}`)
        .end((error,res)=>{
           
            expect(res).to.have.status(200);
            expect(res.body.data).to.be.a('object');
            done();
        });

    });



    it("it should delete user by id", (done)=>{

        const user=new User({
            firstName:"joy",
            lastName:"shalom",
            email:"joy@gmail.com",
            password: bcrypt.hash("joyce",10)
        })
        user.save();
        id=user._id;

        request(app).delete(`/api/deleteUser/${id}`)
        .set('token', `Bearer ${token}`)
        .end((error,res)=>{
            
            expect(res).to.have.status(204);
            done();
        });
    })

});


describe("contact message", ()=>{

    it("it should create contact message", (done)=>{
        request(app).post("/api/createMessage").send({
          email:"parfait@gmail.com",
          fullName:"pacha perfect",
          contact:"0781778103",
          message:"It's an amazing brand"
        }).end((error,res)=>{
            expect(res).to.have.status(200);
            expect(res.body.post).to.be.a('object');
            done();
        })
        
    });


    it("should get all messages", (done)=>{
        request(app).get("/api/getAllMessages")
        .set('token', `Bearer ${token}`)
        .end((error,res)=>{
            expect(res).to.have.status(200);
            expect(res.body.data).to.be.a('object');
            done();
        })
    });



    it("it should get single message", (done)=>{

        const contact= new Contact({
            email:"perfect@gmail.com",
            fullName:"pacha parfaite",
            contact:"0781234567",
            message:"I like your brand!"
        })
        contact.save();
        id=contact._id;

        request(app).get(`/api/getSingleMessage/${token}`)
        .set('token',`Bearer ${token}`)
        .end((error,res)=>{
            expect(res).to.have.status(200);
            expect(res.body.data).to.be.a('object');
            done();
        })
    });



    it("it should delete single message", (done)=>{

        const contact= new Contact({
            email:"parfait@gmail.com",
            fullName:"parfait parfaite",
            contact:"0789090892",
            message:"This brand is good"
        })
        contact.save();
        id=contact._id;

        request(app).delete(`/api/deleteMessage/${id}`)
        .set('token', `Bearer ${token}`)
        .end((error,res)=>{

            expect(res).to.have.status(204);
            done();
        })
    })


});




describe("Blog APIs", ()=>{

//    it("it should create blog", (done)=>{
//     const blog= new Blog({
//         blogTitle:"Node js",
//         blogAuthor:"Tparfaite",
//         blogImage:"sass.PNG",
//         blogContent:"node js is very good",
//         blogComments:"node js is very interesting"
//     })
//     blog.save();
//     id=blog._id;

//     request(app).post(`/api/createBlog/${id}`).set('token', `Bearer ${token}`).end((error,res)=>{
//         expect(res).to.have.status(201);
//         expect(res.body.post).to.be.a('object');
//         done();
//     })
//    });




    it("it should get all blogs", (done)=>{
        request(app).get(`/api/getAllBlogs`).send().end((error,res)=>{
            expect(res).to.have.status(200);
            expect(res.body.data.post).to.be.a('array');
            done();
        })
    });



    it("it should get one blog by id", (done)=>{

        const blog=new Blog({
            blogTitle:"html",
            blogAuthor:"Tpacha",
            blogImage:"sass.PNG",
            blogContent:"HyperText markup language",
            blogComments:"this is wonderful"
        })
        blog.save();
        id=blog._id;

        request(app).get(`/api/getOneBlog/${id}`)
        .set('token', `Bearer ${token}`)
        .end((error,res)=>{
            expect(res).to.have.status(201);
            expect(res.body.data.post).to.be.a('object');
            done();
        })
    });



    it("it should delete one blog", (done)=>{

        const blog=new Blog({
            blogTitle:"css",
            blogAuthor:"Tpacha",
            blogImage:"sass.PNG",
            blogContent:"css means castcading stylesheet",
            blogComments:"styling"
        })
        blog.save();
        id=blog._id;

        request(app).delete(`/api/deleteBlog/${id}`)
        .set('token', `Bearer ${token}`)
        .end((error,res)=>{
            expect(res).to.have.status(204);
            done();
        })
    })


})
