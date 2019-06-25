import Vue from 'vue';
import App from '@/App.vue';
import { NavBar } from 'vant';
import router from '@/router';
import store from '@/store';
import directives from './directive';
import mixin from './mixin';

Vue.config.productionTip = false;
Vue.use(NavBar);
Object.keys(directives).forEach((name) => {
  Vue.directive(name, directives[name]);
});
// 全局混入
Vue.mixin(mixin);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
