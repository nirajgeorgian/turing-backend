// import { category, product, department } from '../../db/models'

export const home = async (req, res) => {
	await res.send({
		host: req.headers.host,
		message: 'API up and running.',
	})
	// category
	// 	.findAll({
	// include: [
	// 	{
	// 		model: department,
	// 	},
	// ],
	// 	})
	// 	.then(dodo => res.send(dodo))
}
