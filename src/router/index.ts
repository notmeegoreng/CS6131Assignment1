import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import HomeView from '../views/home.vue'
import LoginView from '../views/login.vue'
import RegisterView from '../views/register.vue'
import ProfileView from '../views/profile.vue'
import ForumView from '../views/forum.vue'
import NewThreadView from '../views/new_thread.vue'
import ThreadView from '../views/thread.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/login/register/',
    name: 'register',
    component: RegisterView,
  },
  {
    path: '/users/:user_id/',
    name: 'users',
    props: true,
    component: ProfileView
  },
  {
    path: '/forums/:forum_id/',
    name: 'forum',
    props: true,
    component: ForumView
  },
  {
    path: '/forums/:forum_id/new_thread/',
    name: 'newThread',
    props: true,
    component: NewThreadView
  },
  {
    path: '/forums/:forum_id/threads/:thread_id/',
    name: 'thread',
    props: true,
    component: ThreadView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPos) {
    console.log('scrollBehavior called')
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth',
        offset: {x: 0, y: 80}
      }
    } else if (savedPos) {
      return savedPos
    }
  }
})

export default router
