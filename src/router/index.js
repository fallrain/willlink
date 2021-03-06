import Vue from 'vue';
import Router from 'vue-router';
import routerData from '@/router/routerData';
import store from '@/store';

Vue.use(Router);
const router = new Router({
  mode: 'history',
  base: process.env.routerBase,
  routes: routerData.data,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition && !to.meta.scrollTop) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  }
});
router.beforeEach((to, from, next) => {
  if (to.name === 'SuggestionList' && from.name === 'SuggestionForm') {
    store.commit('addAliveExclude', 'SuggestionList');
  } else {
    store.commit('delAliveExclude', 'SuggestionList');
  }

  if (to.name === 'EventDetail' && from.name === 'MyEventList') {
    store.commit('addAliveExclude', 'EventDetail');
  } else {
    store.commit('delAliveExclude', 'EventDetail');
  }

  if (to.name === 'MyEventList' && from.name === 'EventReport') {
    store.commit('addAliveExclude', 'MyEventList');
  } else {
    store.commit('delAliveExclude', 'MyEventList');
  }
  const title = to.meta && to.meta.title;
  if (title) {
    store.dispatch('update_title', title);
  }
  const bottomNav = !!((to.meta && to.meta.bottomNav));
  store.dispatch('update_bottomnav', bottomNav);
  const topNav = !!((to.meta && to.meta.topNav));
  store.dispatch('update_topnav', topNav);
  const topNotice = !!((to.meta && to.meta.topNotice));
  store.dispatch('update_topnotice', topNotice);
  next();
});
export default router;
