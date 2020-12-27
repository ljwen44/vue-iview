<!--  -->
<template>
  <div class="email">
    <button @click="handleClick">点击按钮</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    handleClick () {
      this.$bus.$emit('on_click', 'bus测试') // 向bus返回一个带数据的on_click事件
    }
  }
}

</script>
<style scoped>
.email{
  color: red;
}
</style>
