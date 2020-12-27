<!--  -->
<template>
  <div class="split-pane-wrapper" ref="outer">
    <div class="pane pane-left" :style="{ width: leftOffsetPercent}">
      <!-- <button @click="handleClick">ssss</button> -->
      <slot name="left"></slot>
    </div>

    <div class="pane-trigger-con" :style="{ left: triggerLeft, width: `${triggerWidth}px`}" @mousedown="handleMousedown">
    </div>

    <div class="pane pane-right" :style="{ left: leftOffsetPercent, paddingLeft: `${this.triggerWidth/ 2}px`}">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SplitPane',
  props: {
    value: {// 容器中的left属性的值
      type: Number,
      default: 0.5
    },
    triggerWidth: {
      type: Number,
      default: 8
    },
    min: {
      type: Number,
      default: 0.1
    },
    max: {
      type: Number,
      default: 0.9
    }
  },
  data () {
    return {
      // leftOffset: 0.3, // 容器中的left属性的值
      canMove: false, // 滚动条状态
      initOffset: 0 // 初始偏移值
    }
  },
  computed: {
    leftOffsetPercent () {
      return `${this.value * 100}%`
    },
    triggerLeft () {
      return `calc(${this.value * 100}% - ${this.triggerWidth / 2}px)` // EX3的计算属性calc
    }
  },
  methods: {
    handleClick () {
      this.value -= 0.02
    },
    handleMousemove (event) {
      // pageX表示距离页面左侧的值
      if (!this.canMove) return
      const outerRect = this.$refs.outer.getBoundingClientRect() // getBoundingClientRect()可查看DOM的有关位置信息
      let offsetPercent = (event.pageX - outerRect.left - this.initOffset + this.triggerWidth / 2) / outerRect.width // 计算滚动条距离页面左侧的距离
      if (offsetPercent < this.min) offsetPercent = this.min
      if (offsetPercent > this.max) offsetPercent = this.max
      // this.$emit('input', offsetPercent)
      this.$emit('update:value', offsetPercent)
    },
    handleMouseup () {
      this.canMove = false
    },
    handleMousedown (event) {
      document.addEventListener('mousemove', this.handleMousemove)
      document.addEventListener('mouseup', this.handleMouseup)
      this.initOffset = event.pageX - event.srcElement.getBoundingClientRect().left
      this.canMove = true
    }
  }
}

</script>
<style lang="less" scoped>
.split-pane-wrapper{
  height: 100%;
  width: 100%;
  position: relative;
  .pane{
    position: absolute;
    top: 0;
    height: 100%;
    &-left{
      // width: 30%;
      background: palevioletred;
    } // &相当于.pane
    &-right{
      background: paleturquoise;
      right: 0;
      bottom: 0;
      left: 30%;
    }
    &-trigger-con{
      width: 8px;
      height: 100%;
      background: red;
      position: absolute;
      top: 0;
      z-index: 10;
      user-select: none;
      cursor: col-resize;
    }
  }
}
</style>
