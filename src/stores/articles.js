import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getArticles } from '../api/articles'

export const useArticlesStore = defineStore('articles', () => {
  const articles = ref([])
  const loading = ref(false)

  const fetchArticles = async () => {
    try {
      loading.value = true
      articles.value = await getArticles()
    } catch (error) {
      console.error('Failed to fetch articles:', error)
      throw error
    } finally {
      loading.value = false
    }
  }

  return {
    articles,
    loading,
    fetchArticles
  }
}) 