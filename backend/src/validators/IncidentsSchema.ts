
import * as Joi from '@hapi/joi'

export default {
  store: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    value: Joi.number().required()
  }).unknown(false),
  update: Joi.object({
    title: Joi.string(),
    description: Joi.string(),
    value: Joi.number()
  }).unknown(false)
}
