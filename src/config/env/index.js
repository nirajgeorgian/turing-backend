import path from 'path'
import { development, production, testing } from '../console'

/**
 * [envConfig load appropiate .env file based on the NODE_ENV environemtn variable]
 * @return {Promise} [.env file]
 */
const envConfig = () => {
	const env = process.env.NODE_ENV
	switch (env) {
		case 'development':
			development('Running in development mode')
			return require('dotenv').config({
				path: path.resolve(process.cwd(), 'src/config/env/.env.dev'),
			})
		case 'production':
			production('Building for production')
			return require('dotenv').config({
				path: path.resolve(process.cwd(), 'src/config/env/.env.prod'),
			})
		case 'test':
			testing('Starting Test mode')
			return require('dotenv').config({
				path: path.resolve(process.cwd(), 'src/config/env/.env.test'),
			})
		default:
			development('Default mode is loaded: Development')
			return require('dotenv').config({
				path: path.resolve(process.cwd(), 'src/config/env/.env.dev'),
			})
	}
}

export default envConfig()
