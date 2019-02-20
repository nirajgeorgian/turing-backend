import bodyParser from 'body-parser'
import compression from 'compression'
import override from 'method-override'

import cors from './cors'
import toobusy from './toobussy'
import ignoreRequest from './ignReq'
import security from './security'
import logger from './logger'
import { verifyJwt } from '../utils/auth/auth.util'

export default app => {
	app.set('trust proxy', true)
	app.use(bodyParser.urlencoded({ extended: false }))
	app.use(bodyParser.json())
	cors(app)
	logger(app)
	app.use(compression())
	app.use(toobusy)
	app.use(override())
	ignoreRequest(app)
	security(app)
	app.use(verifyJwt)
}
