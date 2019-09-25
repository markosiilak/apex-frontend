import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import './assets/less/app.less';
import 'jquery/dist/jquery.js'
import 'uikit/dist/js/uikit-core.js'
import 'uikit/dist/js/uikit-icons.js'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
