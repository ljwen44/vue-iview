<!--  -->
<template>
  <ASubmenu>
    <div slot="title">{{ parent.title }}</div>
    <template v-for="(item, i) in parent.children">
      <AMenuItem v-if="!item.children" :key="`menu_item_${ index }_${i}`">{{ item.title }}</AMenuItem>
      <ReSubmenu v-else :key="`menu_item_${ index }_${ i }`" :parent="item"></ReSubmenu>
    </template>
  </ASubmenu>
</template>

<script>
import menuComponents from '_c/menu'
const { ASubmenu, AMenuItem } = menuComponents
export default {
  name: 'ReSubmenu',
  components: {
    ASubmenu,
    AMenuItem
  },
  props: {
    parent: {
      type: Object,
      default: () => ({})
    },
    index: Number
  }
}

</script>
<style lang='less' scoped>
</style>
