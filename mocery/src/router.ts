import { createRouter, createWebHistory } from 'vue-router'
import Bricksnpieces from './modules/bricksnpieces/pages/Bricksnpieces.vue'
import Home from './modules/home/pages/Home.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
//    meta: {
//      requiresAuth: true,
//    },
  },
  // starting point for Bricks&Pieces
  {
      path: '/bricksnpieces',
      name: 'bricksnpieces',
      component: Bricksnpieces,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router 
