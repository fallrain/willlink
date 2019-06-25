import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import directives from './directive';

Vue.config.productionTip = false;

Object.keys(directives).forEach((name) => {
  Vue.directive(name, directives[name]);
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
