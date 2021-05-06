import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Session from '@/libs/Session'

import { store } from '@/store/index'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, _from, next) => {
  if ((to.name !== 'Login' && to.name !== 'Register') && !Session.isAuthenticated()) {
    store.dispatch("setAsLogout")
    next({ name: 'Login' })
  }
  else if ((to.name === 'Login' || to.name === 'Register') && Session.isAuthenticated()){
    store.dispatch("setAsLogin")
    next({ name: 'Home' })
  }
  else {
    next()
  }
})

export default router
