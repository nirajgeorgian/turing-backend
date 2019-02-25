import httpMocks from 'node-mocks-http'
import { sequelize } from '../db/models'
import { signup } from './customer'

beforeAll(async () => {
	await sequelize.drop()
	await sequelize.sync({ force: true })
}, 10000)

afterAll(() => {
	sequelize.close()
})

describe('Test the customer Model', () => {
	const newUser = {
		name: 'dodo duck',
		email: 'dododuck@example.com',
		password: 'dodo@N9',
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
	})
})
