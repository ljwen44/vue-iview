<!--  -->
<template>
  <Table :columns="insideColunms" :data="value"></Table>
</template>

<script>
import clonedeep from 'clonedeep'
export default {
  name: 'EditTable',
  data () {
    return {
      edittingId: '',
      insideColunms: [],
      edittingContent: ''
    }
  },
  props: {
    colunms: {
      type: Array,
      default: () => []
    },
    value: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleClick ({ row, index, column }) {
      if (this.edittingId === `${column.key}_${index}`) {
        let tableDate = clonedeep(this.value)
        tableDate[index][column.key] = this.edittingContent
        this.$emit('input', tableDate)
        this.$emit('on-edit', { row, index, column, newValue: this.edittingContent })
        this.edittingId = ''
        this.edittingContent = ''
      } else {
        this.edittingId = `${column.key}_${index}`
      }
    },
    handleInput (newValue) {
      this.edittingContent = newValue
    },
    handleColumns () {
      const insideColunms = this.colunms.map(item => {
        if (!item.render && item.editable) {
          item.render = (h, { row, index, column }) => {
            const isEditting = this.edittingId === `${column.key}_${index}`
            return (
              <div>
                { isEditting ? <i-input value={row[column.key]} style="width: 50px;" on-input={this.handleInput}></i-input> : <span>{row[column.key]}</span>}
                <i-button on-click={this.handleClick.bind(this, { row, index, column })}>{ isEditting ? '保存' : '编辑' }</i-button>
              </div>
            )
          }
          return item
        } else return item
      })
      this.insideColunms = insideColunms
    }
  },
  mounted () {
    this.handleColumns()
  },
  watch: {
    colunms () {
      this.handleColumns()
    }
  }
}

</script>
<style lang='less' scoped>
</style>
