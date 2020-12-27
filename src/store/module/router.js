import { routes, routerMap } from '@/router/router'

const state = {
  routers: routes,
  hasGetRules: false // 用户权限列表状态
}

const mutations = {
  CONCAT_ROUTES (state, routerList) {
    state.routers = routerList.concat(routes)
    state.hasGetRules = true
  }
}

const getAccessRouterList = (routes, rules) => {
  // 过滤路由数组
  return routes.filter(item => {
    if (rules[item.name]) {
      // 是否可以访问的页面
      if (item.children) item.children = getAccessRouterList(item.children, rules)
      return true
    } else return false
  })
}

const actions = {
  concatRoutes ({ commit }, rules) {
    return new Promise((resolve, reject) => {
      try {
        let routerList = []
        // entries 获取到的是一个二维数组,every遍历数组，返回true
        if (Object.entries(rules).every(item => item[1])) {
          routerList = routerMap
        } else {
          routerList = getAccessRouterList(routerMap, rules)
        }
        commit('CONCAT_ROUTES', routerList)
        resolve(state.routers)
      } catch (err) {
        reject(err)
      }
    })
  }
}

export default {
  state,
  mutations,
  actions
}
