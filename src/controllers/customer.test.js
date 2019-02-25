import httpMocks from 'node-mocks-http'
import { sequelize } from '../db/models'
import { signup, login } from './customer'

beforeAll(async () => {
	await sequelize.drop()
	await sequelize.sync({ force: true })
}, 30000)

afterAll(() => {
	sequelize.close()
})

describe('Test the customer Model', () => {
	const user = {
		email: 'dododuck@example.com',
		password: 'dodo@N9'
	}
	const newUser = {
		name: 'dodo duck',
		...user
	}

	test('signup: Controller', async () => {
		const req = httpMocks.createRequest({
			method: 'POST',
			url: '/api/v1/auth/signup',
			body: newUser,
		})
		const res = httpMocks.createResponse()
		await signup(req, res)
		const data = await res._getData()
		expect(data.status).toBeTruthy()
		expect(data.customer).toHaveProperty('name', newUser.name)
		expect(data.customer).toHaveProperty('email', newUser.email)
	})
	
	test('login: Controller', async () => {
		const req = httpMocks.createRequest({
			method: 'POST',
			url: '/api/v1/auth/login',
			body: newUser,
		})
		const res = httpMocks.createResponse()
		await login(req, res)
		const data = await res._getData()
		expect(data.status).toBeTruthy()
		expect(data.customer).toHaveProperty('token')
		expect(data.customer.token).toContain('Bearer')
	})
})
