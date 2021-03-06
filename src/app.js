import path from 'path'
import express from 'express'

import middlewares from './middleware'
import { appRoutes } from './routes'

const app = express()
app.use(express.static(path.join(__dirname, 'public')))

middlewares(app)
appRoutes(app)

export default app
