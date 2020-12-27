<!--  -->
<template>
  <Submenu :name="parent.name">
    <template slot="title">
      <Icon :type="parent.icon"></Icon>
      {{ parent.meta.title }}
    </template>
    <template v-for="item in parent.children">
      <ReSubmenu
        v-if="item.children"
        :key="`menu_${item.name}`"
        :name="item.name"
        :parent="item">
      </ReSubmenu>
      <menu-item v-else :key="`menu_${item.name}`" :name="item.name">
        <Icon :type="item.icon"></Icon>
        {{ item.meta.title }}
      </menu-item>
    </template>
  </Submenu>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  name: 'ReSubmenu',
  props: {
    parent: {
      type: Object,
      default: () => ({})
    }
  }
}

</script>
<style lang='less' scoped>

</style>
