import { product_category } from '../../db/models'
import { errorMessage, successMessage } from '../utils/response'

export const getAllProducts = async (req, res) => {
	console.log(product_category)
	product_category.findAll().then(dodo => console.log(dodo))
	// try {
	// 	const products = await ProductModel.findAll({
	// 		include: [
	// 			{
	// 				model: CategoryModel,
	// 				through: {
	// 					attributes: ['category_id'],
	// 				},
	// 			},
	// 		],
	// 	})
	// 	return res.send(successMessage('products', products))
	// } catch (err) {
	// 	return res.status(400).send(errorMessage(err.message))
	// }
}

/** Retrieve single product information
 *  Check if user purchased this if logged-in
 *  with corresponding reviews
 */
// export const getSingleProduct = (req, res) => {
// 	const getProductInfo = ProductModel.findById(req.params.id)
// }
