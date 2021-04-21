import 'font-awesome/css/font-awesome.css'  

import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORARIO!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Illnb3IgVmVyZGUiLCJlbWFpbCI6Inlnb3J2ZXJkZTU3MkBnbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjE4OTgxMzEzLCJleHAiOjE2MTg5OTIxMTN9._U23FHttcxkL9CoVMTPz4AQ7h-72_I6t-AQUC1URQBk '

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')