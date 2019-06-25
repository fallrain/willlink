import * as types from './mutations_types.js';

export default {
  update_title: ({ commit }, text) => new Promise((resolve) => {
    commit(types.UPDATE_TITLE, text);
    resolve();
  }),
  update_bottomnav: ({ commit }, value) => new Promise((resolve) => {
    commit(types.UPDATE_BOTTOMNAV, value);
    resolve();
  }),
  update_topnav: ({ commit }, value) => new Promise((resolve) => {
    commit(types.UPDATE_TOPNAV, value);
    resolve();
  }),

};
