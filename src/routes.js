import homeRouter from './routes/home'
import customerRouter from './routes/customer'

export const appRoutes = app => {
	app.use('/api/v1', homeRouter)
	app.use('/api/v1', customerRouter)
}
