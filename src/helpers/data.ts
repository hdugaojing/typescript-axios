import { isPlainObject } from './util'

// 将请求的data转换为字符串
export function transformRequest(data: any): any {
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }
  return data
}
