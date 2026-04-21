import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RouteErreur from '../views/RouteErreur.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      
      name: 'home',
      component: HomeView
    },
    {
      path: '/:catchAll(.*)',
      name: '404',
      component: RouteErreur
    }
  ]
})

export default router
