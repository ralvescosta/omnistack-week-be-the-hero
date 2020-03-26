import { getRepository } from 'typeorm'
import { Request, Response } from 'express'
import { Ongs } from '../entity/Ongs'
import * as crypto from 'crypto'

class OngsController {
  async store (request: Request, response: Response) {
    const ongRepository = getRepository(Ongs)
    const id = crypto.randomBytes(4).toString('HEX')
    try {
      await ongRepository.save({ id, ...request.body })
      return response.json({ id })
    } catch (err) {
      return response.status(500).json({ error: 500, msg: 'Internal Server Error' })
    }
  }

  async index (request: Request, response: Response) {
    const ongRepository = getRepository(Ongs)

    const ongs = await ongRepository.find()
    return response.json(ongs)
  }

  async show (request: Request, response: Response) {
    const ongRepository = getRepository(Ongs)

    const ong = await ongRepository.findOne(request.params.id)
    return response.json(ong)
  }

  async update (request: Request, response: Response) {
    const ongRepository = getRepository(Ongs)

    const ong = await ongRepository.findOne(request.params.id)

    if (!ong) {
      return response.status(404).json({ error: 404, msg: 'Ong Not Found' })
    }

    Object.keys(request.body).forEach(bodyElement => {
      if (ong[bodyElement]) {
        ong[bodyElement] = request.body[bodyElement]
      }
    })

    try {
      await ongRepository.save(ong)
    } catch (err) {
      console.log(err)
      return response.status(500).json({ error: 500, msg: 'Internal Server Error' })
    }

    return response.json(ong)
  }

  async delete (request: Request, response: Response) {
    const ongRepository = getRepository(Ongs)

    const ongToRemove = await ongRepository.findOne(request.params.id)

    if (!ongToRemove) {
      return response.status(404).json({ error: 404, msg: 'Ong Not Found' })
    }

    try {
      await ongRepository.remove(ongToRemove)
    } catch (err) {
      console.log(err)
      return response.status(500).json({ error: 500, msg: 'Internal Server Error' })
    }

    return response.status(204).json({})
  }
}

export default new OngsController()
