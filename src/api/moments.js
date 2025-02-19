// 模拟动态数据
const momentsData = [
  {
    id: 1,
    content: '发布了一篇新文章：《Vue3+Vite+Element Plus从零搭建个人博客》\n分享了如何使用 Vue3、Vite 和 Element Plus 从零开始搭建一个现代化的个人博客系统，包括项目初始化、路由配置、组件封装等详细步骤。',
    date: '2025-02-10 10:30',
    likes: 12,
    links: [
      {
        title: '阅读全文',
        url: 'https://juejin.cn/post/7472957056498073619'
      },
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