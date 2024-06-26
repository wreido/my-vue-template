import type { AxiosError, AxiosInstance } from 'axios'

export async function retry(instance: AxiosInstance, err: AxiosError) {
  const config: any = err.config
  const { waitTime, count } = config.retryConfig ?? {}
  config.currentCount = config.currentCount ?? 0
  console.log(`第${config.currentCount}次重连`)
  if (config.currentCount >= count) {
    return Promise.reject(err)
  }
  config.currentCount++
  await wait(waitTime)
  return await instance(config)
}

function wait(waitTime: number) {
  return new Promise((resolve) => setTimeout(resolve, waitTime))
}
