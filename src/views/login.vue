<!--  -->
<template>
  <div>
    账号：<input v-model="userName" />
    <br>
    密码：<input type="password" v-model="password" />
    <br>
    <button @click="handleClick">登录</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { setToken } from '@/lib/util'
export default {
  // beforeRouteEnter (to, from, next) {
  //   next(vm => {
  //     console.log(vm)
  //   })
  // },
  // beforeRouterLeave (to, from, next) {
  //   const leave = confirm('您确定要离开吗？')
  //   if (leave) next()
  //   else next(false)
  // },
  name: 'login_page',
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    ...mapActions([
      'login'
    ]),
    handleClick () {
      this.login({
        userName: this.userName,
        password: this.password
      }).then(res => {
        if ((this.userName === res.data.userId) && (this.password === res.data.password)) {
          alert('登录成功')
          setToken(res.data.token)
          this.$router.push({
            name: 'home'
          })
        } else {
          alert('账号或密码有误，请重新输入')
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}

</script>
<style lang='less' scoped>
</style>
