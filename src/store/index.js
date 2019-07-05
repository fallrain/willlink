import Vuex from 'vuex';
import Vue from 'vue';
import { axGet } from '@/lib/ajax';
import createPersistedState from '@/lib/vuexPlugin/persistedstate';
import states from './states';
import user from '@/store/user';

Vue.use(Vuex);
export default new Vuex.Store({
  plugins: [
    createPersistedState({
      storage: sessionStorage
    })
  ],
  state: {
    aliveExclude: [
      'Login',
      'SysAnnouncementDetail',
      'Feedback',
      'PrivateKeyImport',
      'ProductOrder'
    ],
    loadingShow: false// loading 显示隐藏
  },
  getters: {
  },
  mutations: {
    /* eslint注释请不要删除 */
    /* eslint-disable no-unused-expressions */
    toggleAliveExclude({ aliveExclude }, name) {
      /* 改变缓存排除的页面 */
      const index = aliveExclude.indexOf(name);
      index === -1 ? aliveExclude.push(name) : aliveExclude.splice(index, 1);
    },
    delAliveExclude({ aliveExclude }, name) {
      const index = aliveExclude.indexOf(name);
      index !== -1 && aliveExclude.splice(index, 1);
    },
    addAliveExclude({ aliveExclude }, name) {
      const index = aliveExclude.indexOf(name);
      index === -1 && aliveExclude.push(name);
    },
    showLoading(state) {
      state.loadingShow = true;
    },
    hideLoading(state) {
      state.loadingShow = false;
    }
  },
  actions: {
  },
  modules: {
    states,
    user
  }
});
