import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Discovery from '../views/Discovery.vue'
import Login from '../views/Login.vue'
import Test from '../views/Test.vue'
import SongLists from '../views/SongLists.vue'
import Player from '../views/Player.vue'

import Collect from '../views/user/Collect.vue'
import UserInfo from '../views/user/UserInfo.vue'
import EditUserInfo from '../views/user/EditUserInfo.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/discovery',
        component: Discovery,
      },
      {
        path: '/test',
        component: Test,
      },
      {
        path: '/songLists',
        component: SongLists,
      },
      {
        path: '/player',
        component: Player,
      },
      {
        path: '/collect',
        component: Collect,
      },
      {
        path: '/userInfo',
        component: UserInfo,
      },
      {
        path: '/editUserInfo',
        component: EditUserInfo,
      },
    ],
  },
  {
    path: '/login',
    component: Login,
  },
]

const router = new VueRouter({
  routes,
})

export default router
