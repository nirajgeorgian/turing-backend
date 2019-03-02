import {
	category,
	product_category,
	product,
	department,
	Sequelize,
} from '../db/models'
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
		const products = await product_category.findAndCountAll({
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
		const { count } = products
		const pageLimit = req.query.limit ? Number(req.query.limit) : 12
		const pageOffset = req.query.offset ? Number(req.query.offset) : 0
		const totalCurrent = page * pageSize - pageSize + pageOffset + pageLimit
		const hasNext = totalCurrent < count ? true : false
		return res.send(
			successMessage('data', {
				products: products,
				hasNext,
			})
		)
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

export const searchProduct = async (req, res) => {
	try {
		const result = await product.find({
			where: Sequelize.literal(
				`MATCH (name, description) AGAINST('${
					req.query.term
				}' IN NATURAL LANGUAGE MODE)`
			),
		})
		return res.send(successMessage('products', result))
	} catch (err) {
		return res.status(400).send(errorMessage('no product found'))
	}
}
