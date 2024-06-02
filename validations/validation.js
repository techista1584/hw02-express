import Joi from "joi";

// Define validation for adding/updating a contact
const contactValidation = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

// Define validation for updating favorite field
const favoriteValidation = Joi.object({
  favorite: Joi.bool().required(),
});

export { contactValidation, favoriteValidation };