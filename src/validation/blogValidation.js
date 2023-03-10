import Joi from "joi";


const blogValidationSchema=Joi.object({
  blogTitle:Joi.string().required(),
  blogAuthor:Joi.string().required(),
  blogImage:Joi.string(),
  blogContent:Joi.string().required(),
  blogComments:Joi.string(),

});

export default blogValidationSchema;