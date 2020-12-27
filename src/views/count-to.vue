<!--  -->
<template>
  <div>
    <CountTo :end-val="endVal" ref="countTo" @on-animation-end="handleEnd">
      <span slot="left">总金额: </span>
      <span slot="right"> 美元</span>
    </CountTo>
    <button @click="getNumber">获取数值</button>
    <button @click="update">更新数值</button>
  </div>
</template>

<script>
import CountTo from '_c/count-to'
export default {
  name: 'count-to',
  data () {
    return {
      endVal: 100
    }
  },
  components: {
    CountTo
  },
  methods: {
    getNumber () {
      this.$refs.countTo.getCount()
    },
    update () {
      this.endVal += Math.random() * 100
    },
    handleEnd (endVal) {
      console.log(endVal)
    }
  }
}

</script>
<style scoped>
</style>
