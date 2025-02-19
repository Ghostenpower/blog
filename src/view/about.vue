<script setup>
import { ElRow, ElCol } from 'element-plus'
import { Message, Phone } from '@element-plus/icons-vue'
</script>

<template>
  <el-row class="about-container">
    <el-col :span="24">
      <div class="about-content">
        <h1>关于我</h1>
        <div class="info-section">
          <p>Hi，我是Jyang，一名前端开发工程师。</p>
          <p>目前在做前端开发相关工作，主要技术栈：</p>
          <ul>
            <li>前端：Vue.js、React、TypeScript</li>
            <li>后端：Node.js、Express</li>
            <li>数据库：MongoDB、MySQL</li>
          </ul>
        </div>

        <div class="contact-section">
          <h2>联系方式</h2>
          <ul>
            <li>
              <el-icon><Message /></el-icon>
              <span>邮箱：2315181588@qq.com</span>
            </li>
            <li>
              <el-icon><Phone /></el-icon>
              <span>手机：15677060914</span>
            </li>
          </ul>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<style scoped>
.about-container {
  padding: 40px;
}

.about-content {
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  margin-bottom: 30px;
  font-size: 28px;
}

h2 {
  margin: 25px 0 15px;
  font-size: 22px;
}

.info-section {
  margin-bottom: 40px;
}

.info-section p {
  margin: 15px 0;
  line-height: 1.6;
}

.info-section ul {
  margin: 15px 0;
  padding-left: 20px;
}

.info-section li {
  margin: 10px 0;
  line-height: 1.5;
}

.contact-section ul {
  list-style: none;
  padding: 0;
}

.contact-section li {
  display: flex;
  align-items: center;
  margin: 15px 0;
  font-size: 16px;
}

.contact-section .el-icon {
  margin-right: 12px;
  font-size: 18px;
  color: var(--el-text-color-secondary);
}

.contact-section span {
  color: var(--el-text-color);
}
</style> 