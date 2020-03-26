import { Router } from 'express'

/**
 * Controllers
 */
import OngsController from './controller/OngsController'
import IncidentsController from './controller/IncidentsController'
import ProfileControllers from './controller/ProfileControllers'
import SessionController from './controller/SessionController'

/**
 * Middlewares
 */
import validator from './middlewares/Validator'

/**
 * Validators Schemas
 */
import OngsSchema from './validators/OngsSchema'
import IncidentsSchema from './validators/IncidentsSchema'

const routes = Router()

routes.post('/session', SessionController.store)

routes.post('/ongs', validator(OngsSchema.store), OngsController.store)
routes.get('/ongs', OngsController.index)
routes.get('/ongs/:id', OngsController.show)
routes.put('/ongs/:id', validator(OngsSchema.update), OngsController.update)
routes.delete('/ongs/:id', OngsController.delete)

routes.post('/incidents', validator(IncidentsSchema.store), IncidentsController.store)
routes.get('/incidents', IncidentsController.index)
routes.get('/incidents/:id', IncidentsController.show)
routes.put('/incidents/:id', validator(IncidentsSchema.update), IncidentsController.update)
routes.delete('/incidents/:id', IncidentsController.delete)

routes.get('/profile', ProfileControllers.index)
export default routes
