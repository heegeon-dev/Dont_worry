import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import SendMail from '@/components/SendMail'
import onlyMobile from '@/components/onlyMobile'
import Search from '@/components/Search'
import Vuex from 'vuex'
import AdminTop from '@/components/Admin/AdminTop'

Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  routes: [
    {
      path: '/Main',
      name: 'Main',
      component: Main
    },
    {
      path: '/SendMail',
      name: 'SendMail',
      component: SendMail
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/onlyMobile',
      name: 'onlyMobile',
      component: onlyMobile
    },
    {
      path: '/admin',
      component: AdminTop,
      meta: {
        title: '관리자 사이트'
      }
    }
  ]
})
