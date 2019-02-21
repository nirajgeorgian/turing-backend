import request from 'supertest'
import app from '../../src/app'

describe('Test the root path', () => {
	test('It should response to GET method', async () => {
		const response = await request(app).get('/api/v1')
		expect(response.statusCode).toBe(200)
	})
})
