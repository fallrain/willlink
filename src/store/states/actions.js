import * as types from './mutations_types.js'

export default {
  update_title: ({ commit }, text) => {
    return new Promise((resolve) => {
      commit(types.UPDATE_TITLE, text)
      resolve()
    })
  },
  update_bottomnav: ({ commit }, value) => {
    return new Promise((resolve) => {
      commit(types.UPDATE_BOTTOMNAV, value)
      resolve()
    })
  },
  update_topnav: ({ commit }, value) => {
    return new Promise((resolve) => {
      commit(types.UPDATE_TOPNAV, value)
      resolve()
    })
  },

}
