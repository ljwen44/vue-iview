<!--  -->
<template>
  <Table :columns="insideColunms" :data="value"></Table>
</template>

<script>
import clonedeep from 'clonedeep'
export default {
  name: 'EditTableMul',
  data () {
    return {
      insideData: [],
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
      let keyIndex = this.insideData[index].edittingKeyArr ? this.insideData[index].edittingKeyArr.indexOf(column.key) : -1
      let rowObj = this.insideData[index]
      if (keyIndex > -1) {
        rowObj.edittingKeyArr.splice(keyIndex, 1)
        this.insideData.splice(index, 1, rowObj)
        this.$emit('input', this.insideData)
        this.$emit('on-edit', { row, index, column, newValue: this.insideData[index][column.key] })
      } else {
        rowObj.edittingKeyArr = (rowObj.edittingKeyArr) ? [...rowObj.edittingKeyArr, column.key] : [column.key]
        this.insideData.splice(index, 1, rowObj)
      }
    },
    handleInput (row, index, column, newValue) {
      this.insideData[index][column.key] = newValue
    },
    handleColumns () {
      this.insideData = clonedeep(this.value)
      const insideColunms = this.colunms.map(item => {
        if (!item.render && item.editable) {
          item.render = (h, { row, index, column }) => {
            const keyArr = this.insideData[index] ? this.insideData[index].edittingKeyArr : []
            return (
              <div>
                { keyArr && keyArr.indexOf(column.key) > -1
                  ? <i-input value={row[column.key]} style="width: 50px;" on-input={this.handleInput.bind(this, row, index, column)}></i-input>
                  : <span>{row[column.key]}</span>}
                <i-button on-click={this.handleClick.bind(this, { row, index, column })}>{ keyArr && keyArr.indexOf(column.key) > -1 ? '保存' : '编辑' }</i-button>
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
    },
    value () {
      this.handleColumns()
    }
  }
}

</script>
<style lang='less' scoped>
</style>
