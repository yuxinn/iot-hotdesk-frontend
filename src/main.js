import Vue from 'vue'
import { router } from './router/router.js'
import App from './App.vue'
import Antd from 'ant-design-vue'
import axios from 'axios'
import 'ant-design-vue/dist/antd.css'

Vue.use(Antd)
Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
