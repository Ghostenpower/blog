<script setup>
import { Calendar } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps({
  article: {
    type: Object,
    required: true,
    validator: (article) => {
      return article.title && article.date
    }
  }
})

const goToDetail = () => {
  router.push({
    name: 'Article',
    params: { id: props.article.id }
  })
}
</script>

<template>
  <div class="article-card" @click="goToDetail">
    <h2 class="article-title">{{ article.title }}</h2>
    <p v-if="article.summary" class="article-summary">{{ article.summary }}</p>
    <div class="article-footer">
      <span class="article-date">
        <el-icon :size="18"><Calendar /></el-icon>
        {{ article.date }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.article-card {
  padding: 25px;
  margin-bottom: 20px;
  border-radius: 12px;
  background-color: var(--card-bg-color);
  transition: transform 0.2s;
  cursor: pointer;
}

.article-card:hover {
  transform: translateY(-2px);
}

.article-title {
  font-size: 20px;
  margin: 0 0 15px;
  color: var(--el-text-color);
}

.article-summary {
  color: var(--el-text-color-regular);
  line-height: 1.6;
  margin-bottom: 15px;
}

.article-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--el-text-color-secondary);
  font-size: 14px;
}

.article-date {
  display: flex;
  align-items: center;
  gap: 8px;
}

.article-date .el-icon {
  font-size: 18px;
  color: var(--el-text-color-secondary);
}
</style> 