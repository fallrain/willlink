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
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  }
});
router.beforeEach((to, from, next) => {
  next();
});
export default router;
