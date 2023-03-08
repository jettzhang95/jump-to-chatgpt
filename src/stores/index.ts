import { reactive } from 'vue'

export type THEME = 'system' | 'light' | 'dark'

const store = reactive<{
  theme: THEME
  apiKey?: string
  toggleTheme: () => void
  setApiKey: (apiKey: string) => void
}>({
  theme: 'system',
  apiKey: undefined,
  toggleTheme() {
    this.theme = this.theme === 'system' ? 'light' : this.theme === 'light' ? 'dark' : 'system'
  },
  setApiKey(apiKey: string) {
    this.apiKey = apiKey
  }
})

export default store
