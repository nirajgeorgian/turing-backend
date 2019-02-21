export const home = async (req, res) => {
	await res.send({
		host: req.headers.host,
		message: 'API up and running.',
	})
}
