import Vue from 'vue'
import App from './App'
// import VConsole from './vconsole.min.js'

Vue.config.productionTip = false

App.mpType = 'app'

/* 
if (process.env.NODE_ENV === 'development') {
  new VConsole()
} */
const app = new Vue({
    ...App
})
app.$mount()
