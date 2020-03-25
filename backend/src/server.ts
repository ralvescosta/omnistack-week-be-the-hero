
import 'reflect-metadata'
import { createConnection, getConnectionOptions } from 'typeorm'
import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as helmet from 'helmet'

import routes from './routes'

class Server {
  public express: express.Application;

  public constructor () {
    this.express = express()

    this.typeORMConnection()
    this.middlewares()
    this.routes()
  }

  private middlewares (): void {
    this.express.use(bodyParser.json())
    this.express.use(cors())
    this.express.use(helmet())
  }

  private async typeORMConnection (): Promise<void> {
    const connectionsOptions = await getConnectionOptions()
    await createConnection(connectionsOptions)
  }

  private routes (): void {
    this.express.use(routes)
  }
}

export default new Server().express
