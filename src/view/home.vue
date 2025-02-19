<script setup>
import { ref, onMounted } from 'vue'
import { Calendar, Link, Star } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { getMoments, updateMomentLikes } from '../api/moments'

const moments = ref([])

onMounted(async () => {
  moments.value = await getMoments()
})

const likePost = async (moment) => {
  try {
    await updateMomentLikes(moment.id, moment.likes + 1)
    moment.likes++
    ElMessage.success('点赞成功')
  } catch (error) {
    ElMessage.error('点赞失败')
  }
}
</script>

<template>
  <div class="home-content">
    <div class="moments-list">
      <div v-for="moment in moments" 
           :key="moment.id" 
           class="moment-card">
        <div class="moment-content">
          <p class="text">{{ moment.content }}</p>
          <div v-if="moment.links?.length" class="links-section">
            <div v-for="link in moment.links" 
                 :key="link.url" 
                 class="link-item">
              <el-link 
                :href="link.url" 
                target="_blank"
                :icon="Link"
              >
                {{ link.title }}
              </el-link>
            </div>
          </div>
        </div>
        <div class="moment-footer">
          <span class="date">
            <el-icon><Calendar /></el-icon>
            {{ moment.date }}
          </span>
          <div class="actions">
            <span class="like-btn" @click="likePost(moment)">
              <el-icon><Star /></el-icon>
              {{ moment.likes }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-content {
  padding: 30px;
}

.moments-list {
  max-width: 800px;
  margin: 0 auto;
}

.moment-card {
  padding: 25px;
  margin-bottom: 20px;
  border-radius: 12px;
  background-color: var(--card-bg-color);
  transition: all 0.3s;
}

.moment-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.moment-content {
  margin-bottom: 20px;
}

.text {
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
  white-space: pre-line;
  color: var(--el-text-color);
}

.links-section {
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.link-item {
  font-size: 14px;
}

.moment-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: var(--el-text-color-secondary);
}

.date {
  display: flex;
  align-items: center;
  gap: 6px;
}

.actions {
  display: flex;
  gap: 15px;
}

.like-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  transition: color 0.2s;
}

.like-btn:hover {
  color: var(--el-color-primary);
}

.el-icon {
  font-size: 16px;
}
</style> 