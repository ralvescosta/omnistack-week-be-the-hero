import { getRepository } from 'typeorm'
import { Request, Response } from 'express'
import { Incidents } from '../entity/Incidents'

class IncidentsController {
  async store (request: Request, response: Response) {
    try {
      const incidentRepository = getRepository(Incidents)
      const incident = await incidentRepository.save(request.body)
      return response.json(incident)
    } catch (err) {
      return response.status(500).json({ error: 500, msg: 'Internal Server Error' })
    }
  }

  async index (request: Request, response: Response) {
    const incidentRepository = getRepository(Incidents)

    const incidents = incidentRepository.find()
    return response.json(incidents)
  }

  async show (request: Request, response: Response) {
    const incidentRepository = getRepository(Incidents)

    const incident = incidentRepository.findOne(request.params.id)
    return response.json(incident)
  }

  async delete (request: Request, response: Response) {
    const incidentRepository = getRepository(Incidents)

    const incident = await incidentRepository.findOne(request.params.id)
    if (incident) {
      await incidentRepository.remove(incident)
      return response.json({})
    }
    return response.status(404).json({ error: 404, msg: 'Ong Not Found' })
  }
}

export default new IncidentsController()
