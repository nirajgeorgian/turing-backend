import httpMocks from 'node-mocks-http'
import { home } from './home'

describe('Test the root Controller', () => {
	test('home: Controller', async () => {
		const req = httpMocks.createRequest({
			method: 'GET',
			url: '/api/v1',
		})
		const res = httpMocks.createResponse()
		await home(req, res)
		const data = res._getData()
		expect(data.message).toEqual('API up and running.')
	})
})
