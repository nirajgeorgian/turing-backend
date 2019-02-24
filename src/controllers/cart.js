import { shopping_cart, sequelize, product } from '../db/models'
import { errorMessage, successMessage } from '../utils/response'

export const getCart = async (req, res) => {
	const customer_id = req.user.id
	try {
		const carts = await shopping_cart.findAll({
			where: { customer_id },
			include: [{ model: product, as: 'product' }],
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
	const single_product = await product.findByPk(product_id)
	if (single_product) {
		const previous_cart = await shopping_cart.findOne({
			where: { product_id, customer_id },
		})
		if (previous_cart) {
			return res
				.status(400)
				.send(errorMessage('item is already added to the cart'))
		} else {
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
					include: [{ model: product, as: 'product' }],
				})
				return res.send(successMessage('cart', carts))
			} catch (err) {
				return res.status(400).send(errorMessage(err.message))
			}
		}
	} else {
		return res.status(400).send(errorMessage('sorry product is not available'))
	}
}

export const updateCart = async (req, res) => {
	const customer_id = req.user.id
	const cart_id = req.body.cart_id ? Number(req.body.cart_id) : null
	const product_id = req.params.product_id
	if (!cart_id) {
		return res.status(400).send(errorMessage('please pass cart_id'))
	}
	try {
		const previous_cart = await shopping_cart.findOne({
			where: { product_id, customer_id },
		})
		if (previous_cart) {
			const updated_cart = await shopping_cart.update(req.body, {
				where: { cart_id, product_id, customer_id },
			})
			if (updated_cart) {
				const carts = await shopping_cart.findAll({
					where: { customer_id },
					include: [{ model: product, as: 'product' }],
				})
				return res.send(successMessage('cart', carts))
			} else {
				return res.status(400).send(errorMessage('error on cart update data'))
			}
		} else {
			return res.status(400).send(errorMessage('please pass proper product id'))
		}
	} catch (err) {
		return res.status(400).send(errorMessage(err.message))
	}
}

export const removeCart = async (req, res) => {
	const customer_id = req.user.id
	const cart_id = req.body.cart_id ? Number(req.body.cart_id) : null
	const product_id = req.params.product_id
	if (!cart_id) {
		return res.status(400).send(errorMessage('please pass cart_id'))
	}
	try {
		const updated_cart = await shopping_cart.findOne({
			where: {
				cart_id,
				product_id,
				customer_id,
			},
		})
		if (updated_cart) {
			await shopping_cart.destroy({
				where: { cart_id, customer_id, product_id },
			})
			const carts = await shopping_cart.findAll({
				where: { customer_id },
				include: [{ model: product, as: 'product' }],
			})
			return res.send(successMessage('cart', carts))
		} else {
			return res.status(400).send(errorMessage('please pass proper product id'))
		}
	} catch (err) {
		return res.status(400).send(errorMessage(err.message))
	}
}
