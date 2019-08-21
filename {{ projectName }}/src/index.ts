import 'reflect-metadata'
import { wrapper, AliyunHttpContext } from 'aliyun-serverless-wrapper'

export const initializer = (ctx: AliyunHttpContext, callback: any) => {
  // implement your own initializer here
  callback(null, '')
}

export const greeting = wrapper(async (ctx) => {
  ctx.body = 'helloworld'
})
