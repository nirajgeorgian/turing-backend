import express from 'express'
import { authenticated } from '../utils/auth/auth.util'
import { getProfile } from '../controllers/profile'

const router = express.Router()
router.route('/profile').get(authenticated, getProfile)

export default router
