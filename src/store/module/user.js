import { login, authorization } from '@/api/user'
import { setToken } from '@/lib/util'

const state = {
  userName: 'Ljwen'
}

const getters = {
  firstLetter: (state) => {
    return state.userName.substr(0, 1)
  }
}

const mutations = {
  SET_USERNAME (state, params) {
    state.userName = params
  }
}

const actions = {
  updateUserName ({ commit, state, rootState, dispatch }) {
    // rootState.appName 通过rootState获取根目录的state内容
    // dispatch('xxx', '')  //调用xxx函数
  },
  login ({ commit }, { userName, password }) {
    return new Promise((resolve, reject) => {
      login({ userName, password }).then(res => {
        // console.log(res)
        if (res.code === 200) {
          resolve(res) // 继续执行后续操纵
        } else {
          reject(new Error('错误'))
        }
      }).catch(err => {
        reject(err)
      })
    })
  },
  authorization ({ commit }, token) {
    return new Promise((resolve, reject) => {
      authorization().then(res => { // authorization为api请求接口定义的函数
        if (parseInt(res.code) === 400) {
          reject(new Error('token error'))
        } else {
          setToken(res.data.token)
          resolve(res.data.rules.page)
        }
      }).catch(err => {
        reject(err)
      })
    })
  },
  logout () {
    setToken('')
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
  modules: {

  } // 嵌套模块
}
