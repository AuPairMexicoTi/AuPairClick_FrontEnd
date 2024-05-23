import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/main.css'
// Import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS
AOS.init();
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
