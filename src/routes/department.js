import express from 'express'
import { getAllDepartment } from '../controllers/department'

const router = express.Router()
router.route('/departments').get(getAllDepartment)

export default router
