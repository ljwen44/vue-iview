<!--  -->
<template>
  <div class="a-menu">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Amenu'
}

</script>
<style lang='less' scoped>
.a-menu{
  & *{
    list-style: none;
    margin: 0;
  }
  ul{
    padding: 0;
  }
}
</style>
