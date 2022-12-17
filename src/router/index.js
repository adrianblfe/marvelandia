import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'heroesList', component: () => import('../views/HeroesList.vue') },
//   { path: '/heroes/:id', name: 'detailHeroe', component: () => import('../views/DetailHeroe.vue') },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router