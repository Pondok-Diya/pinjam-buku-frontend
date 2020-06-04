import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'

import {BootstrapVue,BootstrapVueIcons} from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store'
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);


Vue.prototype.$http = Axios
Vue.prototype.$baseAPI = 'http://192.168.0.102:5000/'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
