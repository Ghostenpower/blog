# 个人博客系统

基于 Vue 3 + Vite + Element Plus 构建的现代化个人博客系统，支持文章管理、项目展示、动态分享等功能。

<div align="center">
  <a href="http://blog.megajam.online/" target="_blank">
    <img src="https://img.shields.io/badge/在线演示-Live%20Demo-blue?style=for-the-badge" alt="在线演示" />
  </a>
</div>

## 技术栈

- Vue 3.5.13 - 渐进式 JavaScript 框架
- Vite 6.1.0 - 下一代前端构建工具
- Element Plus 2.9.4 - 基于 Vue 3 的组件库
- Vue Router 4.5.0 - 官方路由管理器
- Pinia 3.0.1 - Vue 的状态管理库

## 功能特性

- 📱 响应式设计，完美适配移动端
- 🌓 支持亮色/暗色主题，自动跟随系统
- 📝 文章展示和外部链接跳转
- 🎨 项目作品集展示
- 💭 动态分享和点赞功能
- 🔍 文章搜索功能

## 使用方法
1. 克隆项目到本地
```bash
git clone https://github.com/yourusername/your-repo.git
```

2. 安装依赖
```bash
npm install
```

3. 启动项目
```bash
npm run dev
```

4. 访问博客系统
```bash
http://localhost:5173
```

## 项目结构

```bash
src/
├── assets/ # 静态资源
├── components/ # 组件
├── views/ # 视图
├── App.vue # 主组件
├── main.js # 入口文件
└── router.js # 路由配置