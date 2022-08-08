import joi from 'joi';

export const newUrlSchema = joi.object({
    url: joi.string().required().messages({
      'string.empty': "Todos os campos são obrigatórios",
      'any.required': "Todos os campos são obrigatórios",}),
    })