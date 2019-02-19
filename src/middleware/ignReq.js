const ignoreFavicon = (req, res, next) => {
	if (req.originalUrl && req.originalUrl.split('/').pop() === 'favicon.ico') {
		return res.sendStatus(204)
	}
	return next()
}

const ignoreRobots = (req, res, next) => {
	if (req.url === '/robots.txt') {
		res.type('text/plain')
		return res.send('User-agent: *\nDisallow: /')
	}
	return next()
}

const ignoreRequest = app => {
	app.use(ignoreFavicon)
	app.use(ignoreRobots)
}

export default ignoreRequest
