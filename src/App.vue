<template>
  <div id="app">
    <!-- <transition-group name="router"> -->
    <!-- <transition-group :name="router"> -->
    <router-view key="default"/>
    <router-view key="email" name="email"/>
    <router-view key="tel" name="tel"/>
    <!-- </transition-group> -->
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      name: ''
    }
  },
  watch: {
    // '$route' (to) {
    //   to.query && to.query.name && (this.name = to.query.name)
    // }
    '$route' (newRoute) {
      this.UPDATE_ROUTER(newRoute)
    }
  }, // 为特定特面设置动画效果
  methods: {
    ...mapMutations([
      'UPDATE_ROUTER'
    ])
  }
}
</script>

<style scoped>
.router-enter,.router-leave-to{
  opacity: 0;
}
.router-enter-active,.router-leave-active{
  opacity: 1;
  transition: all 1s ease;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
@font-face {
  font-family: 'iconfont';
  src: url('./assets/font/iconfont.eot');
  src: url('./assets/font/iconfont.eot?#iefix') format('embedded-opentype'),
      url('./assets/font/iconfont.woff2') format('woff2'),
      url('./assets/font/iconfont.woff') format('woff'),
      url('./assets/font/iconfont.ttf') format('truetype'),
      url('./assets/font/iconfont.svg#iconfont') format('svg');
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.iconfont-svg {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
