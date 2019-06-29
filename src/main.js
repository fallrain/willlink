import Vue from 'vue';
import App from '@/App';
import {
  Dialog,
  NavBar,
  Icon,
  Toast
} from 'vant';
import router from '@/router';
import store from '@/store';
import VeeValidate from 'vee-validate';
import directives from './directive';
import mixin from './mixin';

Vue.config.productionTip = false;
Vue.prototype.$dialog = Dialog;
Vue.use(NavBar);
Vue.use(Toast);

Object.keys(directives).forEach((name) => {
  Vue.directive(name, directives[name]);
});

// 全局混入
Vue.mixin(mixin);
// 验证组件
Vue.use(VeeValidate);
// icon
Vue.use(Icon);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
