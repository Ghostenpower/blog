// 模拟动态数据
const momentsData = [
  {
    id: 1,
    content: '完成了个人博客网站的基础开发，使用 Vue 3 + Vite 构建，支持暗色模式和响应式布局。\n技术栈: Vue (72.9%), JavaScript (23.5%), CSS (1.8%), HTML (1.8%)',
    date: '2025-02-10 10:30',
    likes: 12,
    links: [
      {
        title: '查看源码',
        url: 'https://github.com/Ghostenpower/blog'
      }
    ]
  },
  {
    id: 2,
    content: '最近在开发秒杀商城系统，基于 Vue 和 Java 实现，支持高并发秒杀功能。',
    date: '2025-02-09 15:20',
    likes: 8,
    links: [
      {
        title: '查看源码',
        url: 'https://github.com/Ghostenpower/seckill-system'
      }
    ]
  },
  {
    id: 3,
    content: '今天完成了博客的暗色模式，夜间阅读体验提升了不少 🌙',
    date: '2025-02-08 20:15',
    likes: 15,
    links: [
      {
        title: '查看源码',
        url: 'https://github.com/Ghostenpower/blog'
      }
    ]
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