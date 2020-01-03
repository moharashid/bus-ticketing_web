import Vue from 'vue'
import App from './App.vue'
import router from './router'
import JQuery from 'jquery'
import './style'
Vue.config.productionTip = false
window.$ = require('jquery')
window.JQuery = require('jquery')
global.JQuery = jQuery

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
