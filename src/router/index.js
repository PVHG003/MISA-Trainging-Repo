import { createRouter, createWebHistory } from 'vue-router'
import CandidateView from '@/views/candidate/CandidateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/candidates',
      name: 'candidates',
      component: CandidateView,
    },
  ],
})

export default router
