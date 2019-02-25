import { customer } from '../db/models'
import { errorMessage, successMessage } from '../utils/response'
import { removeKeys } from '../utils/helpers'

export const getProfile = async (req, res) => {
	const profile = await customer.findByPk(req.user.id)
	if (profile) {
		const newProfile = removeKeys(profile, ['password', 'credit_card'])
		return res.send(successMessage('profile', newProfile))
	} else {
		return res.send(errorMessage('SOmething wrong with you ..!!'))
	}
}
