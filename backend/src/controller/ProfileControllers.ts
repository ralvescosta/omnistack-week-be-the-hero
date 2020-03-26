import { getRepository } from 'typeorm'
import { Request, Response } from 'express'
import { Incidents } from '../entity/Incidents'

class ProfileController {
  async index (request: Request, response: Response) {
    const incidentRepository = getRepository(Incidents)
    const ongid = request.headers.authorization

    const incidents = await incidentRepository.find({ where: { ongId: ongid } })
    return response.json(incidents)
  }
}

export default new ProfileController()
