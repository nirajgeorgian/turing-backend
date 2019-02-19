import fs from 'fs'
import path from 'path'
import jwt from 'jsonwebtoken'

const privateCert = fs.readFileSync(path.resolve(__dirname, 'private.key'))
const publicCert = fs.readFileSync(path.resolve(__dirname, 'public.key'))

export const generateJwtToken = (payload, cert = privateCert) =>
	jwt.sign(payload, cert, {
		algorithm: 'RS256',
		expiresIn: '30d',
	})

export const verifyJwtToken = (token, cert = publicCert) => {
	try {
		return jwt.verify(token, cert)
	} catch (e) {
		throw new Error(e)
	}
}

export const verifyJwt = (req, res, next) => {
	if (
		req.headers.authorization &&
		req.headers.authorization.split(' ')[0] === 'Bearer'
	) {
		const token = req.headers.authorization.split(' ')[1]
		const payload = verifyJwtToken(token)
		if (payload !== null || payload !== undefined) {
			req.user = payload
			req.user.authenticated = true
		}
	} else {
		req.user = {}
	}
	next()
}

export const authenticated = (req, res, next) => {
	if (req.user.authenticated) {
		next()
	} else {
		return res.status(401).send({
			status: false,
			message: 'Login and try again',
		})
	}
}
