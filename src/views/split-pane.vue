<!--  -->
<template>
  <div class="split-pane-con">
    <!-- <SplitePane :value="offset" @input="handleInput"></SplitePane> -->
    <SplitePane :value.sync="offset">
      <div slot="left">left</div>
      <div slot="right">right</div>
    </SplitePane>
  </div>
</template>

<script>
import SplitePane from '_c/split-pane'

export default {
  components: {
    SplitePane
  },
  data () {
    return {
      offset: 0.8
    }
  },
  methods: {
    handleInput (value) {
      this.offset = value
    }
  }
}

</script>
<style scoped>
.split-pane-con{
  width: 400px;
  height: 200px;
  background: papayawhip;
  margin: 0 auto;
}
</style>
