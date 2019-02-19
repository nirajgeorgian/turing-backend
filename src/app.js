import express from 'express'

import middlewares from './middleware'
import homeRouter from './routes/home'

const app = express()

middlewares(app)
app.use(homeRouter)

export default app
