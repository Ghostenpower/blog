<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ArrowLeft, Link } from '@element-plus/icons-vue'
import { getProjectById } from '../api/projects'
import { ElMessage } from 'element-plus'

const route = useRoute()
const router = useRouter()
const project = ref(null)
const loading = ref(true)

const fetchProject = async () => {
  try {
    loading.value = true
    project.value = await getProjectById(route.params.id)
    if (!project.value) {
      ElMessage.error('项目不存在')
      router.push('/projects')
    }
  } catch (error) {
    ElMessage.error('获取项目信息失败')
    console.error(error)
  } finally {
    loading.value = false
  }
}

const goBack = () => {
  router.back()
}

fetchProject()
</script>

<template>
  <div class="project-container">
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
        <div class="project-skeleton">
          <el-skeleton-item variant="h1" style="width: 50%" />
          <el-skeleton-item variant="text" style="margin: 20px 0" />
          <el-skeleton-item variant="p" style="width: 100%" v-for="i in 5" :key="i" />
        </div>
      </template>

      <template #default>
        <div v-if="project" class="project-content">
          <div class="project-header">
            <div class="title-section">
              <h1>{{ project.title }}</h1>
              <el-link 
                v-if="project.link"
                :href="project.link" 
                target="_blank" 
                :icon="Link"
                class="project-link"
              >
                查看源码
              </el-link>
            </div>
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
          </div>
          <div class="project-body">
            {{ project.details }}
          </div>
        </div>
      </template>
    </el-skeleton>
  </div>
</template>

<style scoped>
.project-container {
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

.project-skeleton {
  padding: 20px;
}

.project-header {
  margin: 20px 0 40px;
}

.title-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

h1 {
  font-size: 28px;
  margin: 0;
  color: var(--el-text-color);
}

.project-link {
  font-size: 16px;
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

.project-body {
  line-height: 1.8;
  color: var(--el-text-color);
  font-size: 16px;
  white-space: pre-line;
}
</style> 