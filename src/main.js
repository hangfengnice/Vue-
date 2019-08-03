import Vue from 'vue'
import App from './App.vue'
import router from './route'
import './assets/css/reset.css'
import ElementUI from 'element-ui';

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
