<script setup>
import { Link } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps({
  project: {
    type: Object,
    required: true,
    validator: (project) => {
      return project.title && project.description && project.tech
    }
  }
})

const goToDetail = () => {
  router.push({
    name: 'Project',
    params: { id: props.project.id }
  })
}
</script>

<template>
  <el-card class="project-card" shadow="hover" @click="goToDetail">
    <template #header>
      <div class="card-header">
        <h3>{{ project.title }}</h3>
        <el-link 
          v-if="project.link"
          :href="project.link" 
          target="_blank" 
          :icon="Link" 
        />
      </div>
    </template>
    <p class="project-desc">{{ project.description }}</p>
    <div class="tech-stack">
      <el-tag 
        v-for="tech in project.tech" 
        :key="tech" 
        size="small"
        class="tech-tag"
      >
        {{ tech }}
      </el-tag>
    </div>
  </el-card>
</template>

<style scoped>
.project-card {
  background-color: var(--card-bg-color);
  transition: transform 0.2s;
  width: 100%;
  height: 100%;
}

.project-card:hover {
  transform: translateY(-2px);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-header h3 {
  margin: 0;
  font-size: 18px;
  flex: 1;
  margin-right: 12px;
  /* 文字过长时显示省略号 */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.project-desc {
  color: var(--el-text-color-regular);
  margin: 16px 0;
  line-height: 1.6;
  /* 描述文字过长时显示省略号 */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-clamp: 3;
  overflow: hidden;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-tag {
  background-color: rgba(128, 128, 128, 0.1);
  border: none;
}
</style> 