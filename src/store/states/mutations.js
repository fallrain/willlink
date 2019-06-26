import * as types from '../mutations_types';

export default {
  [types.UPDATE_TITLE](state, value) {
    state.text = value || '首页';
  },
  [types.UPDATE_BOTTOMNAV](state, value) {
    state.bottomnav = value || false;
  },
  [types.UPDATE_TOPNAV](state, value) {
    state.topnav = value || false;
  },
  [types.UPDATE_TOPNOTICE](state, value) {
    state.topnotice = value || false;
  },
};
