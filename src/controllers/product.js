import {
	category,
	product_category,
	product,
	department,
} from '../../db/models'
import { errorMessage, successMessage } from '../utils/response'

/**
 * [Retrieve all product information]
 * @param  {[type]}  req [expressjs request]
 * @param  {[type]}  res [expressjs response]
 * @return {Promise}     [resolve to sql data]
 */
export const getAllProducts = async (req, res) => {
	try {
		const products = await product_category.findAll({
			include: [
				{ model: product },
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

/**
 * [Retrieve single product information]
 * @param  {[type]}  req [expressjs request]
 * @param  {[type]}  res [expressjs response]
 * @return {Promise}     [resolve to sql data]
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
