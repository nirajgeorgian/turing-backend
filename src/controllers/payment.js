import configureStripe from 'stripe'
import { successMessage, errorMessage } from '../utils/response'

const stripe = configureStripe(process.env.STRIPE_SECRET_KEY)
const postStripeCharge = res => (stripeErr, stripeRes) => {
	if (stripeErr) {
		console.log(stripeErr)
		return res.status(500).send(errorMessage(stripeErr))
	} else {
		return res.send(successMessage('payment', stripeRes))
	}
}

export const payment = (req, res) => {
	stripe.charges.create(req.body, postStripeCharge(res))
}
