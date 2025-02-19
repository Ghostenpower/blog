// 文章数据
const articles = [
  {
    id: 1,
    title: '如何手动切换Python版本',
    platform: '掘金',
    url: 'https://juejin.cn/post/7472957056498073619',
    date: '2024-02-28',
    description: '详细介绍了在不同操作系统下手动切换 Python 版本的方法，包括环境变量配置、版本管理工具使用等实用技巧。'
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