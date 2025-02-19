<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Calendar, ArrowLeft } from '@element-plus/icons-vue'
import { getArticleById } from '../api/articles'
import { ElMessage } from 'element-plus'

const route = useRoute()
const router = useRouter()
const article = ref(null)
const loading = ref(true)

const fetchArticle = async () => {
  try {
    loading.value = true
    article.value = await getArticleById(route.params.id)
    if (!article.value) {
      ElMessage.error('文章不存在')
      router.push('/')
    }
  } catch (error) {
    ElMessage.error('获取文章失败')
    console.error(error)
  } finally {
    loading.value = false
  }
}

const goBack = () => {
  router.back()
}

fetchArticle()
</script>

<template>
  <div class="article-container">
    <el-button 
      class="back-button" 
      @click="goBack"
      :icon="ArrowLeft"
      text
    >
      返回
    </el-button>

    <el-skeleton :loading="loading" animated>
      <template #template>
        <div class="article-skeleton">
          <el-skeleton-item variant="h1" style="width: 80%" />
          <el-skeleton-item variant="text" style="margin: 20px 0" />
          <el-skeleton-item variant="p" style="width: 100%" v-for="i in 5" :key="i" />
        </div>
      </template>

      <template #default>
        <div v-if="article" class="article-content">
          <div class="article-header">
            <h1>{{ article.title }}</h1>
            <div class="article-meta">
              <span class="article-date">
                <el-icon :size="18"><Calendar /></el-icon>
                {{ article.date }}
              </span>
            </div>
          </div>
          <div class="article-body">
            {{ article.content }}
          </div>
        </div>
      </template>
    </el-skeleton>
  </div>
</template>

<style scoped>
.article-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  position: relative;
}

.back-button {
  position: absolute;
  left: 20px;
  top: 20px;
  font-size: 16px;
}

.article-skeleton {
  padding: 20px;
}

.article-header {
  margin: 20px 0 40px;
}

h1 {
  font-size: 28px;
  margin-bottom: 20px;
  color: var(--el-text-color);
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 20px;
  color: var(--el-text-color-secondary);
  font-size: 14px;
}

.article-date {
  display: flex;
  align-items: center;
  gap: 8px;
}

.article-body {
  line-height: 1.8;
  color: var(--el-text-color);
  font-size: 16px;
  white-space: pre-line;
}
</style> 