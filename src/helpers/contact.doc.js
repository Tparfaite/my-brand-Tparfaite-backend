const getAllMessages={
    tags:['Contact'],
    description:"get all contact messages",
    security: [
        {
          token: [],
        },
    ],
    Responses:{
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

const getSingleMessage = {
    tags:['Contact'],
    description:"get contact message by id",
    parameters:[
        {
            name:"id",
            in:"path",
            description:" message id",
            type:"string",
            example:"63d69a31235540d67ae4572a"
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


const createMessage = {
    tags:['Contact'],
    description:"Create a message",
    requestBody:{
        content:{
            "application/json":{
                schema:{
                    type:"object",
                    properties:{
                        email:{
                            type:"string",
                            description:"your email",
                            example:"parfaite@gmail.com"
                        },
                        fullName:{
                            type:"string",
                            description:"Your name",
                            example:"parfaite Twagira"
                        },
                        contact:{
                            type:'number',
                            description:"your phone number",
                            example:"0781778103"
                        },
                      
                        message:{
                            type:"string",
                            description:"write message to send",
                            example:"this is good"
                        },
                    }
                }
            }
        }
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

const deleteMessage = {
    tags:['Contact'],
    description:"delete contact message by id",
    parameters:[
        {
            name:"id",
            in:"path",
            description:"message id",
            type:"string",
            example:"63d69a31235540d67ae4572a"
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
                        post:[]
                    }
                 }
            }
        }
    }
};



const contactRouteDoc={
    "/api/getAllMessages":{
        get:getAllMessages
    },
    "/api/createMessage":{
        post:createMessage
    },
    "/api/deleteMessage/{id}":{
        delete:deleteMessage
    },
    "/api/getSingleMessage/{id}":{
        get:getSingleMessage
    }

};
export default contactRouteDoc