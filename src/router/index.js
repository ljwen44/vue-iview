import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './router.js'
// import { setTitle, setToken, getToken } from '@/lib/util.js'
import { getToken } from '@/lib/util.js'
import store from '../store/index.js'
// import store from '@/store'

Vue.use(Router)

const router = new Router({
  routes
})

// const HAS_LOGINED = true// 判断用户是否登录进行跳转

router.beforeEach((to, from, next) => {
  // to.meta && setTitle(to.meta.title)
  // if (to.name !== 'login') {
  //   if (HAS_LOGINED) next()
  //   else next({ name: 'login' })
  // } else {
  //   if (HAS_LOGINED) next({ name: 'store' })
  //   else next()
  // }

  // const token = getToken()
  // if (token) {
  //   store.dispatch('authorization', token).then(() => {
  //     if (to.name === 'login') next({ name: 'store' })
  //     else next()
  //   }).catch(() => {
  //     setToken('')
  //     next({ name: 'login' })
  //   })
  // } else {
  //   if (to.name === 'login') next()
  //   else next({ name: 'count-to' })
  // }

  const token = getToken()
  if (token) {
    if (!store.state.router.hasGetRules) {
      store.dispatch('authorization').then(rules => {
        // 拿到用户列表权限之后进行过滤与合并
        store.dispatch('concatRoutes', rules).then(routers => {
          router.addRoutes(routers)
          next({ ...to, replace: true })
        }).catch(() => {
          next({ name: 'home' })
        })
      })
    } else {
      next()
    }
  } else {
    if (to.name === 'login') {
      next()
    } else next({ name: 'login' })
  }
})// 全局守卫，判断权限

export default router
