import request from 'supertest'
import app from '../../src/app'

const user = {
	email: 'dododuck@example.com',
	password: 'dodo@N9',
	name: 'dodo duck',
}

describe('Test the auth signup path', () => {
	test('POST /auth/signup', async () => {
		const response = await request(app)
			.post('/api/v1/auth/signup')
			.send(user)
			.set('Accept', 'application/json')
		expect(response.statusCode).toBe(400)
	})
})

describe('Test the auth login path', () => {
	test('POST /auth/login', async () => {
		const response = await request(app)
			.post('/api/v1/auth/login')
			.send(user)
			.set('Accept', 'application/json')
		expect(response.statusCode).toBe(201)
	})
})
