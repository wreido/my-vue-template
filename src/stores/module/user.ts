import { defineStore } from 'pinia'

const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  },
  getters: {
    doubleCount: ({ count }) => count * 2
  },
  persist: true
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

export default useUserStore
