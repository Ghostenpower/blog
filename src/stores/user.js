import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const userInfo = ref({
    name: 'Jyang',
    avatar: 'https://i2.hdslb.com/bfs/face/00688c18f7d18938cdeeb8a513174d5d259968a6.webp',
    bio: '前端开发工程师',
    links: {
      github: 'https://github.com/yourusername',
      juejin: 'https://juejin.cn/user/yourusername'
    }
  })

  return {
    userInfo
  }
}) 