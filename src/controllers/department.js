import { department } from '../db/models'
import { successMessage, errorMessage } from '../utils/response'

export const getAllDepartment = async (req, res) => {
	try {
		const departments = await department.findAll({})
		return res.send(successMessage('departments', departments))
	} catch (err) {
		return res.status(400).send(errorMessage(err.message))
	}
}
