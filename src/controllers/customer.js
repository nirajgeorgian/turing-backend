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
export const login = (req, res) => {
	const email = req.body.email ? req.body.email.trim() : null
	const password = req.body.password ? req.body.password.trim() : null

	if (!email || !password) {
		return res.status(400).send(errorMessage('All input required'))
	}

	const emailValidationError = validateEmail(email)
	if (emailValidationError.length > 0) {
		return res.send(400).send(errorMessage(emailValidationError))
	}

	customer
		.findOne({
			where: { email },
		})
		.then(customer => {
			if (customer) {
				if (customer.validPassword(password)) {
					const payload = {
						id: customer.customer_id,
						email: customer.email,
					}
					const token = generateJwtToken(payload)

					return res.status(201).send(
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
		})
		.catch(err => {
			return res.status(400).send(errorMessage(err.message))
		})
}

/**
 * [signup register a new user]
 * @param  {[type]} req [Expressjs Request]
 * @param  {[type]} res [Expressjs Response]
 * @return {[type]}     [Registered User]
 */
export const signup = (req, res) => {
	const name = req.body.name ? req.body.name.trim() : null
	const email = req.body.email ? req.body.email.trim() : null
	const password = req.body.password ? req.body.password.trim() : null

	if (!name || !email || !password) {
		return res.status(400).send(errorMessage('All input required'))
	}

	const emailValidationError = validateEmail(email)
	if (emailValidationError.length > 0) {
		return res.send(400).send(errorMessage(emailValidationError))
	}

	const passwordValidationError = validatePassword(password)
	if (passwordValidationError.length > 0) {
		return res.status(400).send(errorMessage(passwordValidationError))
	}

	customer
		.findAll({
			where: { email },
		})
		.then(user => {
			if (user.length > 0) {
				return res
					.status(400)
					.send(errorMessage('The email is already registered'))
			}

			customer
				.create({
					name,
					email,
					password,
				})
				.then(data => {
					return res.status(201).send(
						successMessage('customer', {
							customer_id: data.customer_id,
							name: data.name,
							email: data.email,
						})
					)
				})
				.catch(err => {
					return res.status(400).send(errorMessage(err.message))
				})
		})
		.catch(err => {
			return res.status(400).send(errorMessage(err.message))
		})
}
