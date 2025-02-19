<script setup>
import { onMounted } from 'vue'
import { Calendar, Link, Position } from '@element-plus/icons-vue'
import { useArticlesStore } from '../stores/articles'
import { ElMessage } from 'element-plus'

const articlesStore = useArticlesStore()

const fetchArticles = async () => {
  try {
    await articlesStore.fetchArticles()
  } catch (error) {
    ElMessage.error('获取文章列表失败')
  }
}

const openArticle = (url) => {
  window.open(url, '_blank')
}

onMounted(() => {
  fetchArticles()
})
</script>

<template>
  <div class="articles-container">
    <h1>技术文章</h1>
    <el-skeleton :loading="articlesStore.loading" animated>
      <template #template>
        <div class="articles-list">
          <div v-for="i in 3" :key="i" class="article-skeleton">
            <el-skeleton-item variant="h3" style="width: 50%" />
            <el-skeleton-item variant="text" style="margin: 12px 0" />
            <el-skeleton-item variant="text" style="width: 30%" />
          </div>
        </div>
      </template>

      <template #default>
        <div class="articles-list">
          <div v-for="article in articlesStore.articles" 
               :key="article.id" 
               class="article-card"
               @click="openArticle(article.url)">
            <div class="article-content">
              <h2 class="article-title">{{ article.title }}</h2>
              <p class="article-desc">{{ article.description }}</p>
            </div>
            <div class="article-footer">
              <div class="meta-info">
                <span class="platform">
                  <el-icon><Position /></el-icon>
                  {{ article.platform }}
                </span>
                <span class="date">
                  <el-icon><Calendar /></el-icon>
                  {{ article.date }}
                </span>
              </div>
              <el-icon class="link-icon"><Link /></el-icon>
            </div>
          </div>
        </div>
      </template>
    </el-skeleton>
  </div>
</template>

<style scoped>
.articles-container {
  padding: 30px;
}

h1 {
  margin-bottom: 30px;
  font-size: 28px;
}

.articles-list {
  max-width: 800px;
  margin: 0 auto;
}

.article-card {
  padding: 25px;
  margin-bottom: 20px;
  border-radius: 12px;
  background-color: var(--card-bg-color);
  transition: all 0.3s;
  cursor: pointer;
}

.article-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.article-title {
  font-size: 20px;
  margin: 0 0 12px;
  color: var(--el-text-color);
}

.article-desc {
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
  color: var(--el-text-color-regular);
}

.article-footer {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: var(--el-text-color-secondary);
}

.meta-info {
  display: flex;
  gap: 20px;
}

.platform, .date {
  display: flex;
  align-items: center;
  gap: 6px;
}

.link-icon {
  font-size: 16px;
  opacity: 0;
  transition: opacity 0.2s;
}

.article-card:hover .link-icon {
  opacity: 1;
}

.article-skeleton {
  padding: 20px;
  background-color: var(--card-bg-color);
  border-radius: 8px;
  margin-bottom: 20px;
}
</style> 