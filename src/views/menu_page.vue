<!--  -->
<template>
  <div class="menu-box">
    <!-- <AMenu>
      <AMenuItem>111</AMenuItem>
      <AMenuItem>222</AMenuItem>
      <ASubmenu>
        <div slot="title">333</div>
        <AMenuItem>333-111</AMenuItem>
        <AMenuItem>333-222</AMenuItem>
      </ASubmenu>
    </AMenu> -->
    <AMenu>
      <template v-for="(item, index) in list">
        <AMenuItem v-if="!item.children" :key="`menu_item_${index}`">{{ item.title }}</AMenuItem>
        <ReSubmenu v-else :key="`menu_item_${ index }`" :parent="item" :index="index"></ReSubmenu>
      </template>
    </AMenu>
  </div>
</template>

<script>
import menuComponents from '_c/menu'
import ReSubmenu from './re-submenu.vue'

// const { AMenu, ASubmenu, AMenuItem } = menuComponents
const { AMenu, AMenuItem } = menuComponents
export default {
  name: 'menu_page',
  components: {
    AMenu,
    // ASubmenu,
    AMenuItem,
    ReSubmenu
  },
  data () {
    return {
      list: [
        {
          title: '111'
        },
        {
          title: '222'
        },
        {
          title: '333',
          children: [
            {
              title: '333-111'
            },
            {
              title: '333-222',
              children: [
                {
                  title: '333-222-111'
                },
                {
                  title: '333-222-222'
                }
              ]
            }
          ]
        }
      ]
    }
  }
}

</script>
<style lang='less' scoped>
.menu-box{
  width: 300px;
  height: 400px;
  text-align: left;
  margin: 0 auto;
}
</style>
