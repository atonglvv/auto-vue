import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/page/login/login'
import Register from '@/page/register/register'
import Layout from "@/page/layout"
import About from "@/page/about"
import Info from "@/page/info/info"
import Personal from "@/page/personal/personal"
import Modify from "@/page/modify/modify"
import Detail from "@/page/detail/detail"
import Motor from "@/page/motor/motor"
import MotorInfo from "@/page/motor/motorInfo"
import MotorAll from "@/page/motor/motorAll"

import api from "@/js/api"
Vue.prototype.GLOBAL = api
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/info',
      name: 'info',
      component: Info
    },
    {
      path: '/personal',
      name: 'personal',
      component: Personal
    },
    {
      path: '/modify',
      name: 'modify',
      component: Modify
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/motor',
      name: 'motor',
      component: Motor
    },
    {
      path: '/motorInfo',
      name: 'motorInfo',
      component: MotorInfo
    },
    {
      path: '/motorAll',
      name: 'motorAll',
      component: MotorAll
    }
  ]
})
