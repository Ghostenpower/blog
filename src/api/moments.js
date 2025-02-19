// 模拟动态数据
const momentsData = [
  {
    id: 1,
    content: '最近在学习 Vue 3 和 Element Plus，感觉组件化开发真的很爽！',
    date: '2025-02-10 10:30',
    likes: 12,
    links: [
      {
        title: 'Vue 3 文档',
        url: 'https://vuejs.org'
      }
    ]
  },
  {
    id: 2,
    content: '分享一个很酷的前端动画库：\nGSAP (GreenSock Animation Platform) 是一个强大的 JavaScript 动画库，可以轻松创建流畅的动画效果。',
    date: '2025-02-09 15:20',
    likes: 8,
    links: [
      {
        title: 'GSAP 官网',
        url: 'https://greensock.com/gsap/'
      }
    ]
  },
  {
    id: 3,
    content: '今天完成了博客的暗色模式，夜间阅读体验提升了不少 🌙',
    date: '2025-02-08 20:15',
    likes: 15
  }
]

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const getMoments = async () => {
  await delay(300)
  return momentsData
}

export const updateMomentLikes = async (id, likes) => {
  await delay(100)
  const moment = momentsData.find(m => m.id === id)
  if (moment) {
    moment.likes = likes
  }
  return moment
} 