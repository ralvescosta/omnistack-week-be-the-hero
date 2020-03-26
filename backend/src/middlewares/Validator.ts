import { Request, Response, NextFunction } from 'express'
import { Schema } from '@hapi/joi'

export default function validator (schema: Schema) {
  return async function (req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      await schema.validateAsync(req.body)
      return next()
    } catch (err) {
      return res.status(400).json(err)
    }
  }
}
