import useRequest from '@/server/http/index'

export const getUserInfo = () => useRequest.post({ url: '/auth/info' })
