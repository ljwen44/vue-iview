<!--  -->
<template>
  <div class="tel">
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: ''
    }
  },
  mounted () {
    this.$bus.$on('on_click', mes => {
      this.message = mes
    }) // 通过给bus定义一个监听事件，监听on_click事件，将数据传送给组件
  }
}
</script>
<style scoped>
.tel{
  color: green;
}
</style>
