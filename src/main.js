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
// 根据路由设置标题
router.beforeEach((to, from, next) => {
  console.log(to.meta.title);
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
