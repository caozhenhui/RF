// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'babel-polyfill'
import App from './App'
import router from './router'
import axios from 'axios'
import './style/reset.scss'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'swiper/dist/css/swiper.css'

Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.$http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
