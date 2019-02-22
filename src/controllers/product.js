import { category, product_category, product, department } from '../db/models'
import { errorMessage, successMessage } from '../utils/response'

/**
 * [Retrieve all product information]
 * [Example: http://localhost:8080/api/v1/products?page=5&limit=10&offset=1&category_name=Animal]
 * @param  {[type]}  req [expressjs request]
 * @param  {[type]}  res [expressjs response]
 * @return {Promise}     [resolve to sql data]
 */
export const getAllProducts = async (req, res) => {
	const pageSize = 12
	const page = req.query.page ? Number(req.query.page) : 1
	const offset = req.query.offset
		? Number(req.query.offset) + (page - 1) * pageSize
		: (page - 1) * pageSize
	const limit = Number(req.query.limit) || pageSize
	const category_name = req.query.category_name
		? { name: req.query.category_name }
		: null
	const department_name = req.query.department_name
		? { name: req.query.department_name }
		: null
	try {
		const products = await product_category.findAll({
			limit,
			offset,
			include: [
				{ model: product },
				{
					model: category,
					where: category_name,
					include: [
						{
							model: department,
							where: department_name,
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
		const singleProduct = await product.findByPk(req.params.id, {
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
