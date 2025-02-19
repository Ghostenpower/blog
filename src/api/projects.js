// 模拟项目数据
const projectData = {
  1: {
    id: 1,
    title: '个人博客系统',
    description: '基于 Vue 3 + Element Plus 开发的个人博客系统',
    tech: ['Vue 3', 'Element Plus', 'Vite'],
    link: 'https://github.com/Ghostenpower/blog',
    details: `
# 项目介绍

这是一个使用 Vue 3 和 Element Plus 开发的个人博客系统。

## 主要功能

1. 响应式布局设计
2. 暗色模式支持
3. 文章管理系统
4. 作品集展示

## 技术特点

- 使用 Vue 3 Composition API
- Element Plus 组件库
- Vue Router 路由管理
- 自定义主题系统
- Markdown 支持

## 项目亮点

1. 优雅的代码组织
2. 良好的用户体验
3. 完善的文档支持
    `
  },
  2: {
    id: 2,
    title: '前端工程化脚手架',
    description: '一个现代化的前端工程化脚手架',
    tech: ['Node.js', 'TypeScript', 'ESLint'],
    link: 'https://github.com/yourusername/fe-cli',
    details: `
# 项目概述

一个帮助快速搭建前端项目的脚手架工具。

## 核心功能

1. 项目模板管理
2. 自动化配置
3. 最佳实践集成

## 技术实现

- 基于 Node.js
- TypeScript 开发
- 命令行交互
    `
  },
  3: {
    id: 3,
    title: '秒杀商城系统',
    description: '一个基于Vue和Java开发的秒杀商城系统，实现高并发秒杀功能。',
    tech: ['Vue.js', 'Java', 'JavaScript', 'CSS'],
    link: 'https://github.com/Ghostenpower/seckill-system',
    details: `
# 秒杀商城系统

## 项目介绍

一个基于Vue和Java开发的秒杀商城系统，实现高并发秒杀功能。

## 技术栈占比

- Vue.js: 48.7%
- Java: 37.5%
- JavaScript: 11.7%
- CSS: 1.8%
- Other: 0.3%

## 主要功能

1. 用户登录注册
2. 商品展示
3. 秒杀功能
4. 订单管理
5. 后台管理系统

## 技术特点

- 前后端分离架构
- 高并发处理
- 分布式系统设计
- 响应式界面
    `
  },
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const getProjectById = async (id) => {
  await delay(500)
  return projectData[id] || null
}

export const getProjects = async () => {
  await delay(300)
  return Object.values(projectData).map(({ id, title, description, tech, link }) => ({
    id,
    title,
    description,
    tech,
    link
  }))
}

export const projects = [
  // ... existing projects ...
  {
    id: 'seckill-system',
    title: '秒杀商城系统',
    description: '一个基于Vue和Java开发的秒杀商城系统，实现高并发秒杀功能。',
    github: 'https://github.com/Ghostenpower/seckill-system',
    technologies: ['Vue.js', 'Java', 'JavaScript', 'CSS'],
    techPercentages: {
      'Vue': 48.7,
      'Java': 37.5,
      'JavaScript': 11.7,
      'CSS': 1.8,
      'Other': 0.3
    },
    features: [
      '用户登录注册',
      '商品展示',
      '秒杀功能',
      '订单管理',
      '后台管理系统'
    ],
    thumbnail: '/images/projects/seckill-system.png',  // 请确保添加对应的项目截图
    category: 'fullstack'
  }
] 