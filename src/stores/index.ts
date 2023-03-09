import { reactive } from 'vue'

export type THEME = 'system' | 'light' | 'dark'

const store = reactive<{
  theme: THEME
  settingVisible: boolean
  apiKey?: string
  toggleTheme: () => void
  toggleSetting: () => void
  setApiKey: (apiKey: string) => void
}>({
  theme: 'system',
  settingVisible: false,
  apiKey: undefined,
  toggleTheme() {
    this.theme = this.theme === 'system' ? 'light' : this.theme === 'light' ? 'dark' : 'system'
  },
  toggleSetting() {
    this.settingVisible = !this.settingVisible
  },
  setApiKey(apiKey: string) {
    this.apiKey = apiKey
  }
})

export default store
