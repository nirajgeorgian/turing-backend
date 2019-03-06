import './src/config/env'
import http from 'http'
import app from './src/app'
import models from './src/db/models'
import { development } from './src/config/console'

const server = http.createServer(app)

const PORT = process.env.PORT || 8080
models.sequelize.sync({ force: true }).then(() => {
	server.listen(PORT, err => {
		if (err) {
			development(err.message)
		}
		development(`running app http://localhost:${PORT}`)
	})
})

/**
 * [if Hot Module for webpack]
 * @param  {[type]} module [global module node object]
 */
let currentApp = app
if (module.hot) {
	module.hot.accept('./src/app', () => {
		server.removeListener('request', currentApp)
		server.on('request', app)
		currentApp = app
	})
}
