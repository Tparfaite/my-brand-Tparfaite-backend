const getAllBlogs={
    tags:["Blogs"],
    description:"get all  blogs",
    responses:{
        200:{
            description:"OK",
            content:{
                "application/json":{
                    scheama:{
                        type:"object",
                        example:{
                            blogTitle: "Sass",
                            blogAuthor: "parfait",
                            blogImage: "https://res.cloudinary.com/dkeo0pa4b/image/upload/v1675363415/xavpxdmjstqyyhinjybo.png",
                            blogComments: "Saa is so interesting",
                            blogContent: "What is an SASS?\nSass stands for Syntactically Awesome Stylesheet. Sass is an extension to CSS. Sass is a CSS pre-processor. Sass is completely compatible with all versions of CSS. Sass reduces repetition of CSS and therefore saves time",
                            _id: "63dc045b9a387f55890ee20e",
                            createdAt: "2023-02-02T18:43:39.109Z",
                            updatedAt: "2023-02-02T18:43:39.109Z",
                            __v: 0
                        },
                    },
                },
            },
        },
    },
};


//get single blog

const getOneBlog={
    tags:["Blogs"],
    summary:"get blog by id",
    description:"get one blog by id",
    parameters:[
        {
            name:"id",
            in:"path",
            description:"blog id",
            type:"string",
            example:"63dc045b9a387f55890ee20e"
        },
    ],
    responses:{
        200:{
            description:"OK",
            content:{
                schema:{
                    type:"object",
                    example:{
                        blogTitle: "Sass",
                        blogAuthor: "parfait",
                        blogImage: "https://res.cloudinary.com/dkeo0pa4b/image/upload/v1675363415/xavpxdmjstqyyhinjybo.png",
                        blogComments: "Saa is so interesting",
                        blogContent: "What is an SASS?\nSass stands for Syntactically Awesome Stylesheet. Sass is an extension to CSS. Sass is a CSS pre-processor. Sass is completely compatible with all versions of CSS. Sass reduces repetition of CSS and therefore saves time",
                        _id: "63dc045b9a387f55890ee20e",
                        createdAt: "2023-02-02T18:43:39.109Z",
                        updatedAt: "2023-02-02T18:43:39.109Z",
                        __v: 0

                    }
                }
            }
        },
        404:{
            description:"blog not found"
        }
    },
};


//create blogs

const createBlog={
    tags:["Blogs"],
    description:"create new blog",
    security:[
        {
            token:[],
        },
    ],
    requestBody:{
        content:{
            "application/json":{
                schema:{
                    type:"object",
                    properties:{
                        blogTitle:{
                            type:"string",
                            description:"Title of the blog",
                            example:"exress"
                        },
                        blogAuthor:{
                            type:"string",
                            description:"Author of the blog",
                            example:"pachaa"
                        },
                        blogImage:{
                            type:"string",
                            description:"image of blog",
                            example:"https://res.cloudinary.com/dkeo0pa4b/image/upload/v1675008453/p4grdq8mtoaqxyxwqwwe.png"
                        },
                        blogContent:{
                            type:"string",
                            description:"contents of blog",
                            example:"Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js"
                        },
                        blogComments:{
                            type:"string",
                            description:"comments on blog",
                            example:"this blog is interesting"
                        },
                    },
                },
            },
        },
    },


    responses:{
        200:{
            description:"OK",
            content:{
                "Application/json":{
                    schema:{
                        type:"object",
                        example:{
                            _id: "63d69a31235540d67ae4572a",
                            blogTitle: "express",
                            blogAuthor: "pachaa",
                            blogImage: "https://res.cloudinary.com/dkeo0pa4b/image/upload/v1675008550/ow47m4rxcqh01zsigv8w.png",
                            blogComments: "I like this",
                            blogContent: "Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js",
                            createdAt: "2023-01-29T16:09:21.384Z",
                            updatedAt: "2023-01-29T16:09:21.384Z",
                            __v: 0
                        },
                    },
                },
            },
        },
    },

};


const deleteBlog = {
    tags: ["Blogs"],
    description: "Delete a blog",

    parameters: [
        {
            name: "id",
            in: "path",
            description: "ID of the blog to delete",
            required: true,
            type: "string"
        }
    ],
    security: [
        {
          token: [],
        },
      ],

    responses: {
        204: {
            description: "No Content"
        },
        401: {
            description: "Unauthorized"
        },
        404: {
            description: "Not Found"
        }
    }
};



const blogRouteDoc={
    "/api/getAllBlogs":{
        get:getAllBlogs
    },
    "/api/getOneBlog/{id}":{
        get:getOneBlog
    },
    "/api/createBlog":{
        post:createBlog
    },
    "/api/deleteBlog/{id}":{
       delete:deleteBlog
    }
}
export default blogRouteDoc;