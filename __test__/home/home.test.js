import request from 'supertest'
import app from '../../src/app'

describe('Test the root path', () => {
	test('GET /', async () => {
		const response = await request(app).get('/')
		expect(response.statusCode).toBe(404)
	})
})

describe('Test the api root path', () => {
	test('GET /api/v1', async () => {
		const response = await request(app).get('/api/v1')
		expect(response.statusCode).toBe(200)
	})
})
