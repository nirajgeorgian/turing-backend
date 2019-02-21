import homeRouter from './routes/home'
import customerRouter from './routes/customer'
import productRouter from './routes/product'

export const appRoutes = app => {
	app.use('/api/v1', homeRouter)
	app.use('/api/v1', customerRouter)
	app.use('/api/v1', productRouter)
}
