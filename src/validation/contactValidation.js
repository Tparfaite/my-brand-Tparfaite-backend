import Joi from "joi";


const contactValidationSchema=Joi.object({
    email:Joi.string().email({minDomainSegments:2}).required(),
    fullName:Joi.string().required(),
    contact:Joi.number().min(10).required(),
    message:Joi.string().min(5).required()
});

export default contactValidationSchema;