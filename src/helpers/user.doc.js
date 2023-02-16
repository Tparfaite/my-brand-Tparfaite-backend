const createUser = {
    tags:["Users"],
    description: "create a user",
    requestBody:{
        content:{
            "Application/json":{
                schema:{
                    type:"object",
                    properties:{
                        firstName:{
                            type:"string",
                            description:"user first name ",
                            example:"Twagira"
                        },
                        lastName:{
                            type:"string",
                            description:"user last name ",
                            example:"Parfaite",
                        },
                        email:{
                            type:"email",
                            description:"email of the user",
                            example:"parfaitetwagira@gmail.com"
                        },
                        password:{
                            type:"string",
                            description:" user password",
                            example:"hello",
                        },
                      
                    },
                },
            },
        },
    },
    responses:{
        201:{
            description:"OK",
            content:{
                "application/json":{
                    type:"object",
                    example:{
                        status:"success",
                        data:[]
                    }
                }
            }
        }
    }
};



const login = {
    tags:["Users"],
    description: "login user",
    requestBody:{
        content:{
            "Application/json":{
                schema:{
                    type:"object",
                    properties:{
                        email:{
                            type:"email",
                            description:"email of the user",
                            example:"paul@gmail.com"
                        },
                        password:{
                            type:"string",
                            description:"password of the user",
                            example:"paulRug23",
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
                "application/json":{
                    schema:{
                        type:"object",
  
                    },
                },
            },
        },
    },
  
  
};


const getAllUsers = {
    
    tags:["Users"],
    description: "list of all users",
    security: [
        {
          token: [],
        },
      ],
    responses:{
        200:{
            description:"OK",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                      

                    },
                },
            },
        },
    },
};


const getOneUser ={
    tags:["Users"],
    summary:"get user by id",
    description:"get single user by id",

    parameters:[
        {
            name: "id",
            in : "path",
            description: "user id" ,
            type: "string",
            example: ""
        },
    ],

    security: [
        {
          token: [],
        },
      ],

   
    responses:{
        200:{
            description:"OK",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                    //     example:{
                    //         _id: "63d2c7d9f20b9aafd96d197f",
                    //         fname: "Manibaho",
                    //         lname: "Patrick",
                    //         email: "patsick@gmail.com",
                    //         password: "$2b$10$OE8r6V3Db6CN3yj9ZUsQZONvrC3hSncyxcT3boLR.JdmYLdkPtOvO",
                    //         role: "admin",
                    //         createdAt: "2023-01-26T18:35:05.284Z",
                    //         updatedAt: "2023-01-26T18:35:05.284Z",
                    //         __v: 0
                          
                    // },
  
                    },
                },
            },
        },
        404:{
            description:"user  not found"
        }
    },
  
  }

const deleteUser = {
    tags:['Users'],
    description:"Delete user by id",
    parameters:[
        {
            name:"id",
            in:"path",
            description:"id of user",
            type:"string"
           
        }
    ],
    security: [
        {
          token: [],
        },
      ],
    responses:{
        200:{
            description:"OK",
            content:{
                 "application/json":{
                    type:'object',
                    example:{
                        status:"success",
                        data:[]
                    }
                 }
            }
        }
    }
};


const userRouteDoc={
    "/api/createUser":{
        post:createUser
    },
    "/api/login":{
        post:login
    },
    "/api/getAllUsers":{
        get:getAllUsers
    },
    "/api/deleteUser/{id}":{
        delete:deleteUser
    },
    "/api/getOneUser/{id}":{
        get:getOneUser
    }

};
export default userRouteDoc