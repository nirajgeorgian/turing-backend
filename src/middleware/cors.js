import cors from 'cors'

const corsOption = {
	origin: true,
	methods: 'GET, HEAD, PUT, PATCH, POST, DELETE, OPTION',
	credentials: true,
	exposedHeaders: ['authorization'],
}

const corsConfig = app => {
	app.use(cors(corsOption))
}

export default corsConfig
