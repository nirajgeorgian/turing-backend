import mcache from 'memory-cache'

export const cache = (duration = 5) => {
	return (req, res, next) => {
		const key = '__ecommerce__' + req.originalUrl
		let cacheBody = mcache.get(key)
		if (cacheBody) {
			return res.send(cacheBody)
		} else {
			res.sendResponse = res.send
			res.send = body => {
				mcache.put(key, body, duration * 1000)
				res.sendResponse(body)
			}
			next()
		}
	}
}
