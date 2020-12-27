<!--  -->
<template>
  <div class="a-submenu">
    <div class="a-submenu-title" @click="handleClick">
      <slot name="title"></slot>
      <span class="icon" :style="{ transform: `rotate(${ showChild ? 0 : 180 }deg)` }">^</span>
    </div>
    <div class="a-submenu-child-box" v-show="showChild">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubMenu',
  data () {
    return {
      showChild: false
    }
  },
  methods: {
    handleClick () {
      this.showChild = !this.showChild
    }
  }
}

</script>
<style lang='less' scoped>
.a-submenu{
  background: rgb(33, 35, 39);
  &-title{
    color: #fff;
    position: relative;
    .icon{
      position: absolute;
      top: 4px;
      right: 10px;
    }
  }
  &-child-box{
    overflow: hidden;
    padding-left: 20px;
  }
  li{
    background: rgb(30, 35, 40);
  }
}
</style>
