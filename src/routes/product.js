import express from 'express'
import { getAllProducts, getSingleProduct } from '../controllers/product'

const router = express.Router()
router.route('/products').get(getAllProducts)
router.route('/products/:id').get(getSingleProduct)

export default router
