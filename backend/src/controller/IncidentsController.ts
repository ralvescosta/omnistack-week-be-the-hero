import { getRepository } from 'typeorm'
import { Request, Response } from 'express'
import { Incidents } from '../entity/Incidents'

class IncidentsController {
  async store (request: Request, response: Response) {
    const incidentRepository = getRepository(Incidents)
    const ongid = request.headers.authorization
    try {
      const incident = await incidentRepository.save({ ...request.body, ongId: ongid })
      return response.json(incident)
    } catch (err) {
      console.log(err)
      return response.status(500).json({ error: 500, msg: 'Internal Server Error' })
    }
  }

  async index (request: Request, response: Response) {
    const incidentRepository = getRepository(Incidents)
    const { page = 1 } = request.query
    const amountOfPage = parseInt(process.env.AMOUNT_OF_PAGE, 10)

    const count = await incidentRepository.count()

    const incidents = await incidentRepository.find({
      relations: ['ong'],
      skip: (page - 1) * amountOfPage,
      take: 5
    })

    response.header('X-Total-Count', count.toString())
    response.header('X-Total-Pages', (count / amountOfPage).toFixed(0))

    return response.json(incidents)
  }

  async show (request: Request, response: Response) {
    const incidentRepository = getRepository(Incidents)

    const incident = await incidentRepository.findOne(request.params.id)
    return response.json(incident)
  }

  async update (request: Request, response: Response) {
    const incidentRepository = getRepository(Incidents)

    const incident = await incidentRepository.findOne(request.params.id)

    if (!incident) {
      return response.status(404).json({ error: 404, msg: 'Incident Not Found' })
    }

    Object.keys(request.body).forEach(bodyElement => {
      if (incident[bodyElement]) {
        incident[bodyElement] = request.body[bodyElement]
      }
    })

    try {
      await incidentRepository.save(incident)
    } catch (err) {
      console.log(err)
      return response.status(500).json({ error: 500, msg: 'Internal Server Error' })
    }

    return response.json(incident)
  }

  async delete (request: Request, response: Response) {
    const incidentRepository = getRepository(Incidents)
    const ongid = request.headers.authorization

    const incident = await incidentRepository.findOne(request.params.id)

    if (!incident) {
      return response.status(404).json({ error: 404, msg: 'Incident Not Found' })
    }
    if (incident.ongId !== ongid) {
      return response.status(401).json({ error: 401, msg: 'Unauthorized' })
    }

    try {
      await incidentRepository.remove(incident)
    } catch (err) {
      console.log(err)
      return response.status(500).json({ error: 500, msg: 'Internal Server Error' })
    }

    return response.status(204).json({})
  }
}

export default new IncidentsController()
