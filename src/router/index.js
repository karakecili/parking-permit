import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'NotFound',
    component: () => import('@/components/NotFound')
  },
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
    meta: {
      auth: false
    }
  },
  {
    path: '/new',
    name: 'new',
    component: () => import('@/views/New.vue'),
    meta: {
      auth: false
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
