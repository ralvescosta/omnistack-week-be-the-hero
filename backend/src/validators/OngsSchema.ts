
import * as Joi from '@hapi/joi'

export default {
  store: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    whatsaap: Joi.string().required(),
    city: Joi.string().required(),
    uf: Joi.string().required()
  }).unknown(false),
  update: Joi.object({
    name: Joi.string(),
    email: Joi.string(),
    whatsaap: Joi.string(),
    city: Joi.string(),
    uf: Joi.string()
  }).unknown(false)
}
