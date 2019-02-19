import morgan from 'morgan'
import { development } from '../config/console'

const logger = app => {
	app.use(morgan('combined', { stream: { write: msg => development(msg) } }))
}

export default logger
