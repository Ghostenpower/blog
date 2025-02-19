// 文章数据
const articles = [
  {
    id: 1,
    title: '深入理解 Vue3 的响应式系统',
    platform: '掘金',
    url: 'https://juejin.cn/post/xxxx',
    date: '2025-02-15',
    description: '详细解析 Vue3 响应式系统的实现原理和使用方法...'
  },
  {
    id: 2,
    title: '前端工程化实践：从零搭建开发环境',
    platform: '知乎',
    url: 'https://zhuanlan.zhihu.com/p/xxxx',
    date: '2025-02-10',
    description: '分享前端工程化的最佳实践，包括构建工具、代码规范...'
  },
  {
    id: 3,
    title: 'TypeScript 高级特性详解',
    platform: '掘金',
    url: 'https://juejin.cn/post/yyyy',
    date: '2025-02-05',
    description: '深入探讨 TypeScript 的高级用法和实战技巧...'
  }
]

// 模拟 API 请求延迟
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const getArticleById = async (id) => {
  await delay(500) // 模拟网络延迟
  return articles.find(article => article.id === id) || null
}

// 获取文章列表
export const getArticles = async () => {
  await delay(300)
  return articles
} 