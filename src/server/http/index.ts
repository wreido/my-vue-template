import { RequstInterceptors } from './type'
import type { AxiosError } from 'axios'
import axios from 'axios'
import AxiosMax from './Axios'
import { retry } from './axiosRetry'
import { checkErrorStatus } from './checkErrorStatus'
import staticAxiosConfig from './config'

const _RequstInterceptors: RequstInterceptors = {
  requestInterceptors(config) {
    config.headers.Authorization =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjbGllbnRUeXBlIjowLCJjcmVhdGVUaW1lIjoxNzE5NDcwMTgyODIwLCJleHAiOjE3MTk3MjkzODIsInVzZXJJZCI6MX0.wo8uRVLs8qtTYXrmYjMU0xkSwV9OZ6bDcYg60Ta_fP0'
    return config
  },
  requestInterceptorsCatch(err) {
    return err
  },
  responseInterceptor(config) {
    return config
  },
  responseInterceptorsCatch(axiosInstance, err: AxiosError) {
    const message = err.code === 'ECONNABORTED' ? '请求超时' : undefined
    if (axios.isCancel(err)) {
      return Promise.reject(err)
    }
    console.log(111, err)
    checkErrorStatus((err as AxiosError).response?.status, message, (message) =>
      console.log(message)
    )
    return retry(axiosInstance, err as AxiosError)
  }
}

const useRequest = new AxiosMax({
  directlyGetData: true,
  baseURL: staticAxiosConfig.baseUrl,
  timeout: 3000,
  interceptors: _RequstInterceptors,
  abortRepetitiveRequest: true,
  retryConfig: {
    count: 0,
    waitTime: 500
  }
})

export default useRequest
