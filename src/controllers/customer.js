// import { customer } from '../../models'
// import { generateJwtToken } from '../utils/auth/auth.util'
// import { errorMessage, successMessage } from '../utils/response'
// import { validateEmail, validatePassword } from '../utils/helpers'
//
// export const login = (req, res) => {
// 	const email = req.body.email ? req.body.email.trim() : null
// 	const password = req.body.password ? req.body.password.trim() : null
//
// 	if (!email || !password) {
// 		return res.status(400).send(errorMessage('All input required'))
// 	}
//
// 	const emailValidationError = validateEmail(email)
// 	if (emailValidationError.length > 0) {
// 		return res.send(400).send(errorMessage(emailValidationError))
// 	}
//
// 	customer
// 		.findOne({
// 			where: { email },
// 		})
// 		.then(customer => {
// 			const payload = {
// 				id: customer.customer_id,
// 				email: customer.email,
// 			}
// 			const token = generateJwtToken(payload)
//
// 			return res.status(201).send(
// 				successMessage('customer', {
// 					token: `Bearer ${token}`,
// 				})
// 			)
// 		})
// 		.catch(err => {
// 			return res.status(400).send(errorMessage(err.message))
// 		})
// }
//
// export const signup = (req, res) => {
// 	const name = req.body.name ? req.body.name.trim() : null
// 	const email = req.body.email ? req.body.email.trim() : null
// 	const password = req.body.password ? req.body.password.trim() : null
//
// 	if (!name || !email || !password) {
// 		return res.status(400).send(errorMessage('All input required'))
// 	}
//
// 	const emailValidationError = validateEmail(email)
// 	if (emailValidationError.length > 0) {
// 		return res.send(400).send(errorMessage(emailValidationError))
// 	}
//
// 	const passwordValidationError = validatePassword(password)
// 	if (passwordValidationError.length > 0) {
// 		return res.status(400).send(errorMessage(passwordValidationError))
// 	}
//
// 	customer
// 		.findAll({
// 			where: { email },
// 		})
// 		.then(user => {
// 			if (user.length > 0) {
// 				return res
// 					.status(400)
// 					.send(errorMessage('The email is already registered'))
// 			}
//
// 			customer
// 				.create({
// 					name,
// 					email,
// 					password,
// 				})
// 				.then(data => {
// 					return res.status(201).send(
// 						successMessage('customer', {
// 							customer_id: data.customer_id,
// 							name: data.name,
// 							email: data.email,
// 						})
// 					)
// 				})
// 				.catch(err => {
// 					return res.status(400).send(errorMessage(err.message))
// 				})
// 		})
// 		.catch(err => {
// 			return res.status(400).send(errorMessage(err.message))
// 		})
// }
