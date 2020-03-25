import { Router } from 'express'

import OngsController from './controller/OngsController'

const routes = Router()

routes.post('/ongs', OngsController.store)
routes.get('/ongs', OngsController.index)
routes.get('/ongs/:id', OngsController.show)
routes.delete('/ongs/:id', OngsController.delete)

export default routes
