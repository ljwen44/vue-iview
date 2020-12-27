import { getAppName } from '@/api/app'

const actions = {
  updateAppName ({ commit }) {
    getAppName().then(res => {
      commit('SET_APPNAME', res.info) // 提交方法名，第二个参数为修改的数据
    }).catch(err => {
      console.log(err)
    })
  } // commit是一个方法，提交数据

  // async updateAppName ({ commit }) {
  //   try {
  //     const { info: { appName } } = await getAppName()
  //     commit('SET_APPNAME', appName)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }  ES8异步处理函数
}

export default actions
