import morgan from 'morgan'
import { development } from '../config/console'

const logger = app => {
	app.use(morgan('dev', { stream: { write: msg => development(msg) } }))
}

export default logger
