import { createRouter, createWebHistory } from 'vue-router'
import home from '../view/home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../view/about.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('../view/projects.vue')
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: () => import('../view/article.vue')
  },
  {
    path: '/project/:id',
    name: 'Project',
    component: () => import('../view/project.vue')
  },
  {
    path: '/articles',
    name: 'Articles',
    component: () => import('../view/articles.vue')
  },
  {
    path: '/seckill',
    name: 'Seckill',
    component: () => import('../view/seckill.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
