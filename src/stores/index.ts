import { reactive } from 'vue'

export type THEME = 'system' | 'light' | 'dark'

const store = reactive<{
  theme: THEME
  changeTheme: () => void
}>({
  theme: 'system',
  changeTheme() {
    this.theme = this.theme === 'system' ? 'light' : this.theme === 'light' ? 'dark' : 'system'
  }
})

export default store
