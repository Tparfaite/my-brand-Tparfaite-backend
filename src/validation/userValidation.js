import Joi from "joi";

const userValidationSchema=Joi.object({
    firstName:Joi.string().required(),
    lastName:Joi.string().required(),
    email:Joi.string().email({minDomainSegments:2 }).required(),
    password:Joi.string().min(6).required()
})


export default userValidationSchema;