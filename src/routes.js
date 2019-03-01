import homeRouter from './routes/home'
import customerRouter from './routes/customer'
import productRouter from './routes/product'
import cartRouter from './routes/cart'
import profileRouter from './routes/profile'
import paymentRouter from './routes/payment'

export const appRoutes = app => {
	app.use('/api/v1', homeRouter)
	app.use('/api/v1', customerRouter)
	app.use('/api/v1', productRouter)
	app.use('/api/v1', cartRouter)
	app.use('/api/v1', profileRouter)
	app.use('/api/v1', paymentRouter)
}
