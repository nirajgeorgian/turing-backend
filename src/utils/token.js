import crypto from 'crypto'

const token = (size = 50) => {
	const buf = crypto.randomBytes(size)
	const token = buf.toString('hex')
	return token
}

export default token
