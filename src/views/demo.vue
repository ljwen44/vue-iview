<template>
  <div>
    <h1>this is demo.vue</h1>
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转</button>
    <button @click="RequestData">请求调用数据</button>
    <br>
    <img :src="url" alt="">
  </div>
</template>

<script>
import { getUserInfo } from '@/api/user'
export default {
  data () {
    return {
      url: ''
    }
  },
  methods: {
    handleClick (type) {
      if (type === 'back') this.$router.back()
      else if (type === 'push') this.$router.push('/name_view')
    },
    RequestData () {
      getUserInfo({ userId: 21 }).then(res => {
        // console.log('res: ', res)
        this.url = res.img
      })
    }
  }
}

</script>
<style scoped>
</style>
