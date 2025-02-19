import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(false)

  const toggleTheme = () => {
    isDark.value = !isDark.value
    document.documentElement.className = isDark.value ? 'dark' : ''
  }

  // 初始化主题
  const initTheme = () => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      isDark.value = true
      document.documentElement.className = 'dark'
    }
  }

  // 监听主题变化并保存
  const saveTheme = () => {
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  }

  return {
    isDark,
    toggleTheme,
    initTheme,
    saveTheme
  }
}) 