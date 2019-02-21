import { category, product, department } from '../../db/models'
import { errorMessage, successMessage } from '../utils/response'

export const getAllProducts = async (req, res) => {
	try {
		const products = await product.findAll({
			include: [
				{
					model: category,
					include: [
						{
							model: department,
						},
					],
				},
			],
		})
		return res.send(successMessage('products', products))
	} catch (err) {
		return res.status(400).send(errorMessage(err.message))
	}
}

/** Retrieve single product information
 *  Check if user purchased this if logged-in
 *  with corresponding reviews
 */
export const getSingleProduct = async (req, res) => {
	try {
		const singleProduct = await product.findById(req.params.id, {
			include: [
				{
					model: category,
					include: [
						{
							model: department,
						},
					],
				},
			],
		})
		return res.send(successMessage('product', singleProduct))
	} catch (err) {
		return res.status(400).send(errorMessage(err.message))
	}
}
