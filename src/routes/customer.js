import express from 'express'
import { login, signup } from '../controllers/customer'

const router = express.Router()
router.route('/auth/signup').post(signup)
router.route('/auth/login').post(login)

export default router
