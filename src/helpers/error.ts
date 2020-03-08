import { AxiosRequestConfig, AxiosResponse } from '../types'

export class AxiosError extends Error {
  isAxiosError: boolean
  config: AxiosRequestConfig
  code?: string | null
  requset?: any
  response?: AxiosResponse

  constructor(
    message: string,
    config: AxiosRequestConfig,
    code?: string | null,
    requset?: any,
    response?: AxiosResponse
  ) {
    super(message)

    this.config = config
    this.code = code
    this.requset = requset
    this.response = response
    this.isAxiosError = true

    // 这段代码的目的是为了解决 TypeScript 继承一些内置对象的时候的坑
    Object.setPrototypeOf(this, AxiosError.prototype)
  }
}
export function createError(
  message: string,
  config: AxiosRequestConfig,
  code?: string | null,
  requset?: any,
  response?: AxiosResponse
): AxiosError {
  const error = new AxiosError(message, config, code, requset, response)
  return error
}
