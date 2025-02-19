<script setup>
import { ref } from 'vue'
import { House, User, Moon, Sunny, Collection, Document } from '@element-plus/icons-vue'
import { useThemeStore } from '../stores/theme'
import { useUserStore } from '../stores/user'
import { onMounted, watch } from 'vue'

const themeStore = useThemeStore()
const userStore = useUserStore()

// 导航菜单数据
const navItems = [
  { path: '/', name: '首页', icon: House },
  { path: '/articles', name: '文章', icon: Document },
  { path: '/projects', name: '作品集', icon: Collection },
  { path: '/about', name: '关于', icon: User }
]

onMounted(() => {
  themeStore.initTheme()
})

watch(() => themeStore.isDark, () => {
  themeStore.saveTheme()
})
</script>

<template>
  <div>
    <!-- 桌面端布局 -->
    <div class="container hidden-xs-only">
      <div class="layout">
        <div class="sidebar">
          <el-col :span="24" class="left-section">
            <el-row class="header">
              <el-col :span="6">
                <div class="avatar-section">
                  <el-avatar :size="40" :src="userStore.userInfo.avatar" />
                </div>
              </el-col>
              <el-col :span="14">
                <h3 class="blog-title">{{ userStore.userInfo.name }}的博客</h3>
              </el-col>
              <el-col :span="4">
                <div class="theme-toggle">
                  <el-icon :size="22" @click="themeStore.toggleTheme">
                    <Moon v-if="!themeStore.isDark" />
                    <Sunny v-else />
                  </el-icon>
                </div>
              </el-col>
            </el-row>

            <div class="menu-list">
              <router-link v-for="item in navItems" :key="item.path" :to="item.path" class="menu-item"
                :class="{ active: $route.path === item.path }" ytactive-class="active">
                <el-icon>
                  <component :is="item.icon" />
                </el-icon>
                <span>{{ item.name }}</span>
              </router-link>
            </div>
          </el-col>
        </div>

        <div class="main-content">
          <router-view></router-view>
        </div>
      </div>
    </div>

    <!-- 移动端和平板布局 -->
    <div class="mobile-container hidden-sm-and-up">
      <el-header class="mobile-header">
        <div class="mobile-user">
          <el-avatar :size="32" :src="userStore.userInfo.avatar" />
          <span class="mobile-title">{{ userStore.userInfo.name }}的博客</span>
        </div>
        <el-icon :size="20" @click="themeStore.toggleTheme">
          <Moon v-if="!themeStore.isDark" />
          <Sunny v-else />
        </el-icon>
      </el-header>

      <div class="mobile-content">
        <router-view></router-view>
      </div>

      <el-footer class="mobile-footer">
        <div class="mobile-nav">
          <router-link 
            v-for="item in navItems" 
            :key="item.path" 
            :to="item.path" 
            class="nav-item"
            :class="{ active: $route.path === item.path }"
          >
            <el-icon><component :is="item.icon" /></el-icon>
            <span>{{ item.name }}</span>
          </router-link>
        </div>
      </el-footer>
    </div>
  </div>
</template>

<style scoped>
.container {
  min-height: 100vh;
  padding: 20px;
}

.layout {
  display: flex;
  gap: 20px;
  max-width: 1300px;
  margin: 0 auto;
}

.sidebar {
  position: sticky;
  top: 20px;
  height: fit-content;
}

.left-section {
  background-color: var(--el-bg-color-left);
  border-radius: 15px;
  min-width: 280px;
  padding: 20px;
}

.main-content {
  flex: 1;
  background-color: var(--el-bg-color-right);
  border-radius: 15px;
  min-width: 0;
}

.header {
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(128, 128, 128, 0.1);
}

.blog-title {
  margin: 0;
  font-size: 18px;
  line-height: 40px;
}

.avatar-section {
  display: flex;
  align-items: center;
  height: 100%;
}

.menu-list {
  margin-top: 20px;
}

.menu-list a {
  text-decoration: none;
  color: inherit;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  margin: 4px 0;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-size: 15px;
}

.menu-item:hover {
  background-color: rgba(128, 128, 128, 0.1);
}

.menu-item.active {
  background-color: rgba(128, 128, 128, 0.1);
  font-weight: 500;
}

.menu-item .el-icon {
  font-size: 18px;
}

.menu-item span {
  margin-left: 12px;
}

.theme-toggle {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.3s;
}

.theme-toggle:hover {
  opacity: 1;
}

/* 移动端和平板样式优化 */
.mobile-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--el-bg-color);
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
}

.mobile-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 60px;
  padding: 0 16px;
  background-color: var(--el-bg-color-left);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(128, 128, 128, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  width: 100%;
  box-sizing: border-box;
}

.mobile-user {
  display: flex;
  align-items: center;
  gap: 12px;
}

.mobile-title {
  font-size: 16px;
  font-weight: 500;
  color: var(--el-text-color);
}

.mobile-content {
  flex: 1;
  margin-top: 60px;
  margin-bottom: 65px;
  padding: 20px 16px;
  background-color: var(--el-bg-color);
  min-height: calc(100vh - 125px);
  width: 100%;
  box-sizing: border-box;
}

.mobile-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 65px;
  background-color: var(--el-bg-color-left);
  border-top: 1px solid rgba(128, 128, 128, 0.1);
  padding: 0;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  width: 100%;
  box-sizing: border-box;
}

.mobile-nav {
  height: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 6px 0;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  text-decoration: none;
  color: var(--el-text-color-secondary);
  font-size: 12px;
  padding: 8px;
  transition: all 0.3s ease;
  border-radius: 8px;
  min-width: 64px;
}

.nav-item.active {
  color: var(--el-color-primary);
  background-color: rgba(var(--el-color-primary-rgb), 0.1);
}

.nav-item .el-icon {
  font-size: 22px;
  margin-bottom: 2px;
}

/* 适配 iPhone 安全区域 */
@supports (padding-bottom: env(safe-area-inset-bottom)) {
  .mobile-footer {
    padding-bottom: env(safe-area-inset-bottom);
    height: calc(75px + env(safe-area-inset-bottom));
  }

  .mobile-content {
    margin-bottom: calc(65px + env(safe-area-inset-bottom));
  }
}

/* 暗色模式适配 */
html.dark .mobile-header,
html.dark .mobile-footer {
  background-color: rgba(var(--el-bg-color-left), 0.8);
}

/* 平板适配 */
@media (min-width: 576px) and (max-width: 768px) {
  .mobile-content {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .nav-item {
    font-size: 13px;
    min-width: 80px;
  }

  .nav-item .el-icon {
    font-size: 24px;
  }
}

/* 移动端特别处理 */
@media (max-width: 768px) {
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  #app {
    width: 100%;
    overflow-x: hidden;
  }

  .mobile-container > * {
    width: 100%;
    box-sizing: border-box;
  }
}
</style>
