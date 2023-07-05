import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  mode: 'hash', // Use "hash" instead of "history"
  // history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Lieux',
      component: () => import('../views/Spots.vue')
    },
    {
      path: '/add',
      name: 'Proposer un lieu',
      component: () => import('../views/AddView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
