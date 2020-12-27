import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from './lib/bus'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
// import '@/assets/font/iconfont.js' // 引用彩色图标时引入
import '@/assets/font/iconfont.css'
import IconFont from '_c/icon-font'
import IconSvg from '_c/icon-svg'
// 组件
import './plugins/element.js'
if (process.env.NODE_ENV !== 'production') require('./mock')

Vue.config.productionTip = false
Vue.prototype.$bus = Bus
// 注册全局组件
Vue.component('icon-font', IconFont)
Vue.component('icon-svg', IconSvg)
Vue.use(iView)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
