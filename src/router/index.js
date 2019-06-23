import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component () {
        return import('@/view/Home')
      }
    },
    {
      path: '/set',
      name: 'set',
      component () {
        return import('@/view/Set')
      }
    },
    {
      path: '/strategy',
      name: 'strategy',
      component () {
        return import('@/view/Strategy')
      }
    },
    {
      path: '/register',
      name: 'register',
      component () {
        return import('@/view/Register')
      }
    },
    {
      path: '/download',
      name: 'download',
      component () {
        return import('@/view/Download')
      }
    }
  ]
})
