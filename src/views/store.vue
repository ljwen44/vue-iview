<!--  -->
<template>
  <div>
    <!-- <AInput @input="handleInput"/> -->
    <AInput :value="stateValue" @input="changeStateValue"/>
    <!-- <p>{{ inputValue }}</p> -->
    <AShow :content="stateValue" />
    <h2>appName:  {{ appName }}, appVersion is: {{ appVersion }}</h2>
    <h2>userName:  {{ userName }}, firstLetter is: {{ firstLetter }}</h2>
    <button @click="ChangeAppName">点击修改appName</button>
    <button @click="ChangeUserName">点击修改用户名</button>
    <!-- <h2>{{ AppVersion }}</h2> -->
    <button @click="registerModule">动态注册模块</button>
    <p v-for="(li, index) in todoList" :key="index">{{ li }}</p>
    <button @click="handleLogout">退出登录</button>
  </div>
</template>

<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'store',
  components: {
    AInput,
    AShow
  },
  data () {
    return {
      inputValue: ''
    }
  },
  methods: {
    ...mapMutations([
      'SET_APPNAME',
      'SET_APPVERSION',
      'SET_USERNAME',
      'SET_STATEVALUE'
    ]), // 相当于将方法传递给当前组件，通过调用this.方法名实现修改
    ...mapActions([
      'updateAppName',
      'logout' // 退出用户登录调用的函数
    ]),
    handleInput (val) {
      this.inputValue = val
    },
    ChangeAppName () {
      // this.SET_APPNAME({ appName: 'newAppName' })
      // this.SET_APPVERSION()

      // this.$store.commit({
      //   type: 'SET_APPNAME',
      //   appName: 'newAppName'
      // })
      // this.$store.commit('SET_APPVERSION')

      this.updateAppName()
    },
    ChangeUserName () {
      this.SET_USERNAME('LJW')
      // this.$store.commit('SET_USERNAME', 'LJW')
    },
    registerModule () {
      this.$store.registerModule('todo', {
        state: {
          todoList: [
            '学习mutations',
            '学习actions'
          ]
        }
      })
    },
    changeStateValue (val) {
      this.SET_STATEVALUE(val)
    },
    handleLogout () {
      this.logout()
      this.$router.push({
        name: 'login'
      })
    }
  },
  computed: {
    ...mapState({
      // state中的变量名: state => state.变量名
      appName: state => state.appName,
      userName: state => state.user.userName,
      AppVersion: state => state.AppVersion,
      todoList: state => state.todo ? state.todo.todoList : [],
      stateValue: state => state.stateValue
    }), // 存放state中的值

    ...mapGetters([
      'firstLetter'
    ]),

    // ...mapState([
    //   'appName'
    // ])
    // appName () {
    //   return this.$store.state.appName
    // },
    // userName () {
    //   return this.$store.state.user.userName
    // }

    appVersion () {
      return this.$store.getters.appVersion
    }

    // firstLetter () {
    //   return this.userName.substr(0, 1)
    // }
    // firstLetter () {
    //   return this.$store.getters.firstLetter
    // }
  }
}
</script>
<style scoped>
</style>
