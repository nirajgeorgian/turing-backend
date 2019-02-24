import { customer } from '../db/models'
import { generateJwtToken } from '../utils/auth/auth.util'
import { errorMessage, successMessage } from '../utils/response'
import { validateEmail, validatePassword } from '../utils/helpers'

/**
 * [login Login a registered User]
 * @param  {[type]} req [Expressjs Request]
 * @param  {[type]} res [Expressjs Response]
 * @return {[type]}     [Jwt Token]
 */
export const login = async (req, res) => {
	const email = req.body.email ? req.body.email.trim() : null
	const password = req.body.password ? req.body.password.trim() : null

	if (!email || !password) {
		return res.status(400).send(errorMessage('All input required'))
	}

	const emailValidationError = await validateEmail(email)
	if (emailValidationError.length > 0) {
		return res
			.send(400)
			.send(errorMessage(`email error: ${emailValidationError}`))
	}

	const user = await customer.findOne({ where: { email } })
	if (user) {
		if (user.validPassword(password)) {
			const payload = {
				id: user.customer_id,
				email: user.email,
			}
			const token = generateJwtToken(payload)

			return res.status(200).send(
				successMessage('customer', {
					token: `Bearer ${token}`,
				})
			)
		} else {
			return res.status(400).send(errorMessage('invalid password'))
		}
	} else {
		return res
			.status(400)
			.send(errorMessage('no user exist with desired email address'))
	}
}

/**
 * [signup register a new user]
 * @param  {[type]} req [Expressjs Request]
 * @param  {[type]} res [Expressjs Response]
 * @return {[type]}     [Registered User]
 */
export const signup = async (req, res) => {
	const name = req.body.name ? req.body.name.trim() : null
	const email = req.body.email ? req.body.email.trim() : null
	const password = req.body.password ? req.body.password.trim() : null

	if (!name || !email || !password) {
		return res.status(400).send(errorMessage('All input required'))
	}

	const emailValidationError = validateEmail(email)
	if (emailValidationError.length > 0) {
		return res
			.send(400)
			.send(errorMessage(`Email error: ${emailValidationError}`))
	}

	const passwordValidationError = validatePassword(password)
	if (passwordValidationError.length > 0) {
		return res
			.status(400)
			.send(errorMessage(`paassword error: ${passwordValidationError}`))
	}

	const user = await customer.findAll({ where: { email } })
	if (user && user.length > 0) {
		return res.status(400).send(errorMessage('The email is already registered'))
	} else {
		try {
			const new_user = await customer.create({ name, email, password })
			return res.status(201).send(
				successMessage('customer', {
					customer_id: new_user.customer_id,
					name: new_user.name,
					email: new_user.email,
				})
			)
		} catch (err) {
			return res.status(400).send(errorMessage(err.message))
		}
	}
}
