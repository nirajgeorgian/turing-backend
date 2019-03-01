import { successMessage } from '../utils/response'

export const home = async (req, res) => {
	return await res.send(
		successMessage('server', {
			host: req.headers.host,
			message: 'API up and running.',
			timestamp: new Date().toISOString(),
		})
	)
}
