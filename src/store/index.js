// 状态管理
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions.js'
import user from './module/user'
import router from './module/router'
import tabNav from './module/tabNav'
// import saveInLocal from './plugins/saveInLocal'

Vue.use(Vuex)

export default new Vuex.Store({
  // strict: process.env.NODE_ENV === 'development', // 严格模式 ,根据环境判断是否开启
  state,
  getters,
  mutations,
  actions,
  modules: {
    user,
    router,
    tabNav
  }
  // plugins: [ saveInLocal ]
})
