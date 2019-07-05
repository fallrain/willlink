import Vue from 'vue';
import App from '@/App';
import {
  Dialog, Icon, NavBar, Toast
} from 'vant';
import router from '@/router';
import store from '@/store';
import '@/lib/veeValidate';
import directives from './directive';
import mixin from './mixin';
import wUtil from '@/lib/util/util';
import { axPost, axGet, axPostJson } from './lib/ajax';

Vue.config.productionTip = false;
Vue.prototype.$dialog = Dialog;
Vue.prototype.wUtil = wUtil;
Vue.prototype.axPost = axPost;
Vue.prototype.axPostJson = axPostJson;
Vue.prototype.axGet = axGet;

Vue.use(NavBar);
Vue.use(Toast);

Object.keys(directives).forEach((name) => {
  Vue.directive(name, directives[name]);
});

// 全局混入
Vue.mixin(mixin);

// icon
Vue.use(Icon);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
