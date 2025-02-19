<script setup>
import { ref, onMounted } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import { getProjects } from '../api/projects'
import { ElMessage } from 'element-plus'

const projects = ref([])
const loading = ref(true)

const fetchProjects = async () => {
  try {
    loading.value = true
    projects.value = await getProjects()
  } catch (error) {
    ElMessage.error('获取项目列表失败')
    console.error(error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchProjects()
})
</script>

<template>
  <div class="projects-container">
    <h1>作品集</h1>
    <el-skeleton :loading="loading" animated>
      <template #template>
        <div class="projects-grid">
          <div v-for="i in 2" :key="i" class="project-skeleton">
            <el-skeleton-item variant="h3" style="width: 50%" />
            <el-skeleton-item variant="text" style="margin: 12px 0" />
            <el-skeleton-item variant="text" style="width: 30%" />
          </div>
        </div>
      </template>

      <template #default>
        <div class="projects-grid">
          <ProjectCard 
            v-for="project in projects" 
            :key="project.id"
            :project="project"
          />
        </div>
      </template>
    </el-skeleton>
  </div>
</template>

<style scoped>
.projects-container {
  padding: 20px;
}

h1 {
  margin-bottom: 30px;
  font-size: 28px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
}

.project-skeleton {
  padding: 20px;
  background-color: var(--card-bg-color);
  border-radius: 8px;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .projects-container {
    padding: 16px;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}

/* 平板适配 */
@media (min-width: 768px) and (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style> 