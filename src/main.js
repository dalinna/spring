import Vue from 'vue';
import Mint from 'mint-ui';
import Axios from 'axios';
import 'mint-ui/lib/style.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/style.css';
// import './assets/js/rem.js';
Vue.config.productionTip = false;
Vue.use(Mint);
Vue.use(ElementUI);
Vue.prototype.$http = Axios;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
