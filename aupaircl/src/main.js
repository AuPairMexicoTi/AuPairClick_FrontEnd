import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/main.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import VueI18n from 'vue-i18n';
import EN from '../src/utils/languajes/locales/en.json'
import ES from '../src/utils/languajes/locales/es.json'
// Initialize AOS
AOS.init();
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueI18n)
Vue.use (store)
Vue.config.productionTip = false

const messages = {
  en: EN,
  es: ES
}

  const savedLanguage = localStorage.getItem('language') || 'es';

const i18n = new VueI18n({
  locale: savedLanguage,
  fallbackLocale: 'en',
  messages
})

new Vue({
  router,
  i18n,
  store,
  render: (h) => h(App)
}).$mount('#app')
