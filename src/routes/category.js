import express from 'express'
import { getAllcategories } from '../controllers/category'

const router = express.Router()
router.route('/categories').get(getAllcategories)

export default router
