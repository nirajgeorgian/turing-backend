import { category } from '../db/models'
import { successMessage, errorMessage } from '../utils/response'

export const getAllcategories = async (req, res) => {
	try {
		const categories = await category.findAll({})
		return res.send(successMessage('categories', categories))
	} catch (err) {
		return res.status(400).send(errorMessage(err.message))
	}
}
