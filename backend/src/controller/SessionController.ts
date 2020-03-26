import { getRepository } from 'typeorm'
import { Request, Response } from 'express'
import { Ongs } from '../entity/Ongs'

class SessionController {
  async store (request: Request, response: Response) {
    const ongRepository = getRepository(Ongs)
    const { id } = request.body

    const ong = await ongRepository.findOne({ where: { id }, select: ['name'] })

    if (!ong) {
      return response.status(400).json({ error: 400, msg: 'No Ong find to this id' })
    }
    return response.json(ong)
  }
}

export default new SessionController()
