<!-- 通过npm i countup 安装 -->
<template>
  <div>
    <!-- slot要设置name属性定义方向 -->
    <slot name="left"></slot><span ref="number" :class="countClass" :id="eleId"></span><slot name="right"></slot>
  </div>
</template>

<script>
import CountUp from 'countup'

export default {
  name: 'CountTo',
  data () {
    return {
      counter: ''
    }
  },
  computed: {
    eleId () {
      return `count_up_${this._uid}` // 每个组件都有不同的uid
    },
    countClass () {
      return [
        'count-to-number',
        this.className
      ]
    }
  },
  props: {
    startVal: { // 起始值
      type: Number,
      default: 0
    },
    endVal: { // 最终值
      type: Number,
      required: true // 不能省略，必须传
    },
    decimals: { // 小数点后保留几位小数
      type: Number,
      default: 0
    },
    delay: { // 动画延迟
      type: Number,
      default: 0
    },
    duration: { // 渐变时长
      type: Number,
      default: 1
    },
    useEasing: { // 是否变速
      type: Boolean,
      default: false
    },
    useGrouping: {
      type: Boolean,
      default: false
    },
    separator: { // 分组符号
      type: String,
      default: ','
    },
    decimal: { // 整数和小数分隔号
      type: String,
      default: '.'
    },
    className: { // 类名
      type: String,
      default: ''
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.counter = new CountUp(this.eleId, this.startVal, this.endVal, this.decimals, this.duration, {
        useEasing: this.useEasing,
        useGrouping: this.useGrouping,
        separator: this.separator,
        decimal: this.decimal
      })
      setTimeout(() => {
        this.counter.start()
        this.emitEndEvent()
      }, this.delay)
    })
  },
  watch: {
    endVal (newVal, oldVal) {
      this.counter.update(newVal)
      this.emitEndEvent()
    }
  },
  methods: {
    getCount () {
      // 显示插槽的标签数量
      // console.log(this.$refs.number)
      return this.$refs.number.innerText
    },
    emitEndEvent () {
      setTimeout(() => {
        this.$nextTick(() => {
          this.$emit('on-animation-end', Number(this.getCount()))
        })
      }, this.duration * 1000 + 5)
    }
  }
}
</script>

<style scoped>
</style>
