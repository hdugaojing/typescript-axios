import { AxiosRequestConfig } from './types'
import xhr from './xhr'
import { bulidURL } from './helpers/url'
import { transformRequest } from './helpers/data'
import { processHeaders } from './helpers/headers'
function axios(config: AxiosRequestConfig): void {
  processConfig(config)
  xhr(config)
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformUrl(config)
  // 因为处理 header 的时候依赖了 data，所以要在处理请求 body 数据之前处理请求 header。
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}

// 处理请求params参数，拼接在url上
function transformUrl(config: AxiosRequestConfig): string {
  const { url, params } = config
  return bulidURL(url, params)
}

// 处理请求data
function transformRequestData(config: AxiosRequestConfig): any {
  return transformRequest(config.data)
}

// 处理请求headers
function transformHeaders(config: AxiosRequestConfig) {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}

export default axios
