import express from 'express'
import { cache } from '../utils/caching'
import {
	getAllProducts,
	getSingleProduct,
	searchProduct,
} from '../controllers/product'

const router = express.Router()
router.route('/products').get(cache(), getAllProducts)
router.route('/products/:id').get(cache(), getSingleProduct)
router.route('/search').get(cache(), searchProduct)

export default router
