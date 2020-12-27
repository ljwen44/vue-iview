<!--  -->
<template>
  <Dropdown @on-click="handleClick" placement="right-start">
    <span class="drop-menu-span" :style="titleStyle">
      <Icon :type="parent.icon" :color="iconColor" :size="20"></Icon>
      <span v-if="showTitle">{{ parent.title }}</span>
    </span>
    <DropdownMenu slot="list">
      <template v-for="item in parent.children">
        <ReDropdown v-if="item.children" :key="`drop_${item.name}`" :parent="item"></ReDropdown>
        <DropdownItem v-else :key="`drop_${item.name}`" :name="item.name">
          <Icon :type="item.icon" color="#515a6e" :size="20"></Icon>
          {{ item.title }}
        </DropdownItem>
      </template>
    </DropdownMenu>
  </Dropdown>
</template>

<script>
export default {
  name: 'ReDropdown',
  props: {
    parent: {
      type: Object,
      default: () => ({})
    },
    iconColor: {
      type: String,
      default: '#515a6e'
    },
    showTitle: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    titleStyle () {
      return {
        textAlign: this.showTitle ? 'left' : 'center'
      }
    }
  },
  methods: {
    handleClick (name) {
      if (!this.showTitle) this.$emit('on-select', name)
    }
  }
}

</script>
<style lang='less' scoped>
.ivu-dropdown-menu > .ivu-dropdown{
  padding: 7px 16px;
}
</style>
