import { shopping_cart, sequelize } from '../../db/models'
import { errorMessage, successMessage } from '../utils/response'

export const getCart = async (req, res) => {
	const customer_id = req.user.id
	try {
		const carts = await shopping_cart.findAll({
			where: { customer_id },
		})
		return res.send(successMessage('cart', carts))
	} catch (err) {
		return res.status(400).send(errorMessage(err.message))
	}
}

export const addToCart = async (req, res) => {
	const customer_id = req.user.id
	const product_id = req.params.product_id
	const buy_now = req.body.buy_now ? req.body.buy_now : null
	const added_on = sequelize.literal('CURRENT_TIMESTAMP')
	const attribute = req.body.attribute ? req.body.attribute.trim() : null
	const quantity = req.body.quantity ? req.body.quantity : null

	try {
		await shopping_cart.create({
			customer_id,
			product_id,
			buy_now,
			added_on,
			attribute,
			quantity,
		})
		const carts = await shopping_cart.findAll({
			where: { customer_id },
		})
		return res.send(successMessage('cart', carts))
	} catch (err) {
		return res.status(400).send(errorMessage(err.message))
	}
}
