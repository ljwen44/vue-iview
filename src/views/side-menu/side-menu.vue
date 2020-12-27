<!--  -->
<template>
  <div class="side-menu-wrapper">
    <!-- 插槽 -->
    <slot></slot>
    <!-- 菜单 -->
    <Menu ref="menu" :active-name="$route.name" :open-names="openName" v-show="!collapsed" width="auto" theme="dark" @on-select="handleSelect">
      <template v-for="item in list">
        <ReSubmenu
          v-if="item.children"
          :key="`menu_${item.name}`"
          :name="item.name"
          :parent="item">
           <menu-item></menu-item>
        </ReSubmenu>
        <menu-item v-else :key="`menu_${item.name}`" :name="item.name">
          <Icon :type="item.icon"></Icon>
          {{ item.meta.title }}
        </menu-item>
      </template>
    </Menu>
    <div v-show="collapsed" class="drop-wrapper">
      <template v-for="item in list">
        <ReDropDown
          @on-select="handleSelect"
          icon-color="#fff"
          :show-title="false"
          v-if="item.children"
          :key="`drop_${item.name}`"
          :parent="item">
        </ReDropDown>
        <Tooltip v-else transfer :content="item.title" placement="right" :key="`drop_${item.name}`">
          <span @click="handleClick(item.name)" class="drop-menu-span">
            <Icon :type="item.icon" color="#fff" :size="20"></Icon>
          </span>
        </Tooltip>
      </template>
    </div>
  </div>
</template>

<script>
import ReSubmenu from './re-submenu.vue'
import ReDropDown from './re-dropdown.vue'
import { mapState } from 'vuex'
import { getOpenArrByName } from '@/lib/util'
export default {
  data () {
    return {
    }
  },
  components: {
    ReSubmenu,
    ReDropDown
  },
  name: 'SideMenu',
  props: {
    collapsed: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    ...mapState({
      routers: state => state.router.routers
    }),
    openName () {
      return getOpenArrByName(this.$route.name, this.routers)
    }
  },
  methods: {
    handleSelect (name) {
      this.$router.push({
        name
      })
    },
    handleClick (name) {
      console.log(name)
    }
  },
  watch: {
    openName () {
      this.$nextTick(() => {
        this.$refs.menu.updateOpened()
      })
    }
  }
}

</script>
<style lang='less' scoped>
.side-menu-wrapper{
  width: 100%;
  .ivu-tooltip,.drop-menu-span{
    display: block;
    width: 100%;
    color: #fff;
    text-align: center;
    padding: 5px 0;
  }
  .drop-wrapper > .ivu-dropdown{
    display: block;
    padding-top: 5px;
    text-align: center;
  }
}
</style>
