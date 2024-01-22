import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/telescopes',
    name: 'telescopes',
   component: () => import('../views/ProductView.vue')
  },
  {
    path: '/accessories',
    name: 'accessories',
   component: () => import('../views/ProductView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
   component: () => import('../views/AdminView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
   component: () => import('../views/ContactView.vue')
  },
  {
    path: '/single/:id?',
    name: 'singleProduct',
    component: () => import('../views/SingleProductView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
