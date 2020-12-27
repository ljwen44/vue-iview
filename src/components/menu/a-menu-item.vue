<!--  -->
<template>
  <div class="a-menu-item">
    <li><slot></slot></li>
  </div>
</template>

<script>
export default {
  name: 'AMenuItem'
}

</script>
<style lang='less' scoped>
.a-menu-item{
  background: #1e1f1e;
  color: #fff;
}
</style>
