import { defineStore } from 'pinia'
import { getUserInfo } from '@/server/api/common'

type UseUserStore = {
  userInfo: {
    perms: string[]
  }
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): UseUserStore => ({
    userInfo: {
      perms: []
    }
  }),
  actions: {
    getUserInfo(): Promise<UseUserStore['userInfo']> {
      return new Promise((resolve, reject) => {
        getUserInfo()
          .then(({ data }) => {
            this.userInfo.perms = data?.perms ?? []
            resolve(this.userInfo)
          })
          .catch((error) => {
            reject(error)
          })
      })
    }
  },
  getters: {
    // doubleCount: ({ count }) => count * 2
  },
  persist: false
  // persist: [
  //   {
  //     paths: ['toLocal'],
  //     storage: localStorage,
  //   },
  //   {
  //     paths: ['count'],
  //     storage: sessionStorage,
  //   },
  // ],
})
