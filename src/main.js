import { createApp } from 'vue'
import ElementPlus from 'element-plus' // 添加ElementPlus导入
import 'element-plus/dist/index.css'   // 添加基础样式
import App from './App.vue'
import router from './router'  // 导入路由
import pinia from './stores'

import 'element-plus/theme-chalk/display.css'

import 'element-plus/theme-chalk/dark/css-vars.css'
import './styles/dark/css-vars.css'

// 修正初始化顺序，先use再mount
const app = createApp(App)
app.use(pinia)
app.use(ElementPlus)
app.use(router)  // 使用路由
app.mount('#app')