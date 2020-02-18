import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'

import {BootstrapVue,BootstrapVueIcons} from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);


Vue.prototype.$http = Axios
Vue.prototype.$baseAPI = 'http://localhost:5000/'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
