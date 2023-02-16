import blogRouteDoc from "./helpers/blog.doc";
import contactRouteDoc from "./helpers/contact.doc";
import userRouteDoc from "./helpers/user.doc";

const swaggerDocumentation={
    openapi: "3.0.0",
    info:{
        title: "MY BRAND API",
        version:"0.1.0",
        description:"This is the backend of my brand",
        contact:{
          name:"TWAGIRAMARIYA Parfaite",
          email:"parfaitetwagira@gmail.com",
          url:"https://github.com/Tparfaite"
    },
    },
    servers:[
        {
            url: "http://localhost:3001",
            name:"development server"
        },

    ],
    components: {
        securitySchemes: {
          token: {
            type: 'apiKey',
            scheme: 'bearer',
            bearerFormat: 'JWT',
            name:"token",
            in:"header"
          },
        },
      },
    tags:[
        {
            name:"Blogs",
            description:""
        },
        {
            name:"Contact",
            description:""
        },
        {
            name:"Users",
            description:""
        }
    ],
    paths:{
    ...blogRouteDoc,
    ...contactRouteDoc,
    ...userRouteDoc
    }

}

export default swaggerDocumentation;