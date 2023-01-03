const Joi = require('joi');

const id = Joi.number().integer();
const email = Joi.string().min(5).max(20);
const password = Joi.string(),

const createUserSchema= Joi.object({
  password: password.required(),
  email: email.required(),
});

module.exports = {
  createUserSchema,
};
