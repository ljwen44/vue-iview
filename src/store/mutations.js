// import vue from 'vue'
const mutations = {
  SET_APPNAME (state, params) {
    state.appName = params.appName
  }, // 修改appName的值

  // SET_APPVERSION (state) {
  //   vue.set(state, 'AppVersion', 'v3.0')
  // }// 动态创建一个state

  SET_STATEVALUE (state, val) {
    state.stateValue = val
  }
}
export default mutations
