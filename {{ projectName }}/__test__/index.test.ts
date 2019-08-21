import { test } from 'aliyun-serverless-wrapper'
import * as functions from '../src/index'

it('should return json', async () => {
  const { status, body, header } = await test(functions.{{ projectName }})()
  expect(status).toBe(200)
  expect(body).toBe('helloworld')
  expect(header).toHaveProperty('Content-Type', 'text/plain')
})
