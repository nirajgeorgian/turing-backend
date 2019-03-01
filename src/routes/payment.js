import express from 'express'
import { payment } from '../controllers/payment'

const router = express.Router()
router.route('/payment').post(payment)

export default router
