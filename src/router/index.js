import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: { name: 'heroesList' } },
  { path: '/heroes', name: 'heroesList', component: () => import('../views/HeroesList.vue') },
  { path: '/heroes/:id', name: 'detailHeroe', component: () => import('../views/DetailHeroe.vue') },
  {
    path: '/:catchAll(.*)', 
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router