import { getRepository } from 'typeorm'
import { Request, Response } from 'express'
import { Ongs } from '../entity/Ongs'

class OngsController {
  async store (request: Request, response: Response) {
    try {
      const ongRepository = getRepository(Ongs)
      const ong = await ongRepository.save(request.body)
      return response.json(ong)
    } catch (err) {
      return response.status(500).json({ error: 500, msg: 'Internal Server Error' })
    }
  }

  async index (request: Request, response: Response) {
    const ongRepository = getRepository(Ongs)

    const ongs = ongRepository.find()
    return response.json(ongs)
  }

  async show (request: Request, response: Response) {
    const ongRepository = getRepository(Ongs)

    const ong = ongRepository.findOne(request.params.id)
    return response.json(ong)
  }

  async delete (request: Request, response: Response) {
    const ongRepository = getRepository(Ongs)

    const ongToRemove = await ongRepository.findOne(request.params.id)
    if (ongToRemove) {
      await ongRepository.remove(ongToRemove)
      return response.json({})
    }
    return response.status(404).json({ error: 404, msg: 'Ong Not Found' })
  }
}

export default new OngsController()
