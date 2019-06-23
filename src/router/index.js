import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
