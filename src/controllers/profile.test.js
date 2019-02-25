import httpMocks from 'node-mocks-http'
import { sequelize, customer } from '../db/models'
import { signup, login } from './customer'

const user = {
	email: 'example1@example.com',
	password: 'dodo@N9'
}
const newUser = {
	name: 'dodo duck',
	...user
}

beforeAll(async () => {
	await sequelize.drop()
	await sequelize.sync({ force: true })
	const req = httpMocks.createRequest({
		method: 'POST',
		url: '/api/v1/auth/signup',
		body: newUser,
	})
	const res = httpMocks.createResponse()
	await signup(req, res)
}, 30000)

afterAll(() => {
	sequelize.close()
})

describe('Test the profile Controller', () => {
	let token
	beforeEach(async () => {
		const req = httpMocks.createRequest({
			method: 'POST',
			url: '/api/v1/auth/login',
			body: user,
		})
		const res = httpMocks.createResponse()
		await login(req, res)
		const data = await res._getData()
		token = data.customer.token
	})
	
	test.skip('profile: Controller', async () => {
		const req = httpMocks.createRequest({
			method: 'GET',
			url: '/api/v1/profile',
			headers: {
				'Authorization': token
			}
		})
		const res = httpMocks.createResponse()
		await login(req, res)
		const profData = await res._getData()
		console.log(profData)
		expect(data.status).toBeTruthy()
		expect(data).toHaveProperty('profile')
	})
})
