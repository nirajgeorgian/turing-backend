import { customer } from '../../db/models'
import { errorMessage, successMessage } from '../utils/response'

export const getProfile = async (req, res) => {
	const profile = await customer.findByPk(req.user.id)
	if (profile) {
		return res.send(successMessage('profile', profile))
	} else {
		return res.send(errorMessage('SOmething wrong with you ..!!'))
	}
}
