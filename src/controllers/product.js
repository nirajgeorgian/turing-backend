import { ProductModel, CategoryModel } from '../config/db'
import { errorMessage, successMessage } from '../utils/response'

export const getAllProducts = async (req, res) => {
	try {
		const products = await ProductModel.findAll({
			include: [
				{
					model: CategoryModel,
					through: {
						attributes: ['category_id'],
					},
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
// export const getSingleProduct = (req, res) => {
// 	const getProductInfo = ProductModel.findById(req.params.id)
// }
