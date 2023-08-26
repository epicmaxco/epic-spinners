import { createRouter, createWebHistory } from 'vue-router'

import LoadersGallery from '../components/LoadersGallery.vue'
import LoadersGetStarted from '../components/LoadersGetStarted.vue'

const routes = [
  {
    path: '/',
    component: LoadersGallery
  },
  {
    path: '/get-started',
    component: LoadersGetStarted
  },
  {
    path: '/:pathMatch(.*)*', 
    redirect: '/'
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})