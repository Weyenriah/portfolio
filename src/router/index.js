import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/projects/:slug',
    name: 'Project',
    component: () => import(/* webpackChunkName: "project" */ '../views/Project.vue'),
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
