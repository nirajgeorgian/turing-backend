import express from 'express'
import { getCart, addToCart, updateCart, removeCart } from '../controllers/cart'
import { authenticated } from '../utils/auth/auth.util'

const router = express.Router()
router.route('/cart').get(authenticated, getCart)
router
	.route('/cart/:product_id')
	.post(authenticated, addToCart)
	.put(authenticated, updateCart)
	.delete(authenticated, removeCart)

export default router
