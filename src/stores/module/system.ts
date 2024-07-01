import { defineStore } from 'pinia'

type UseSystemStore = {
  theme: string
}

export const useSystemStore = defineStore({
  id: 'system',
  state: (): UseSystemStore => ({
    theme: ''
  }),
  actions: {
    setTheme(theme: UseSystemStore['theme']) {
      this.theme = theme
    }
  },
  getters: {
    // doubleCount: ({ count }) => count * 2
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
