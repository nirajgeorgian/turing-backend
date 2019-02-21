import './src/config/env'
import http from 'http'
import app from './src/app'
import { development } from './src/config/console'

const server = http.createServer(app)
let currentApp = app

const PORT = process.env.PORT || 8080
server.listen(PORT, () => {
	development(`running app http://localhost:${PORT}`)
})

/**
 * [if Hot Module for webpack]
 * @param  {[type]} module [global module node object]
 */
if (module.hot) {
	module.hot.accept('./src/app', () => {
		server.removeListener('request', currentApp)
		server.on('request', app)
		currentApp = app
	})
}
