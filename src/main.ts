import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'
import { cacheAdapterEnhancer } from 'axios-extensions';

Vue.use(VueMaterial);
Vue.use(VueAxios, axios.create({
  adapter: cacheAdapterEnhancer(axios.defaults.adapter as any)
}));
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
