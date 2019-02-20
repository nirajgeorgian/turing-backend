import express from 'express'

import middlewares from './middleware'
import { appRoutes } from './routes'

const app = express()
middlewares(app)
appRoutes(app)

export default app
