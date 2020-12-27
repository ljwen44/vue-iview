<!--  -->
<template>
  <div>
    <!-- <EditTable :colunms="columns" v-model="tableDate" @on-edit="handleEdit"></EditTable> -->
    <EditTableMul :colunms="columns" v-model="tableDate"></EditTableMul>
    <Button @click="turnTo">打开参数页</Button>
  </div>
</template>

<script>
import { getTableDate } from '@/api/data'
// import EditTable from '_c/edit-table'
import EditTableMul from '_c/edit-table-mul'
export default {
  data () {
    return {
      tableDate: [],
      columns: [
        { key: 'name', title: '姓名' },
        { key: 'age', title: '年龄', editable: true },
        { key: 'email', title: '邮箱', editable: true }
      ]
    }
  },
  mounted () {
    getTableDate().then(res => {
      this.tableDate = res
      // console.log(res)
    }).catch(err => {
      console.log(err)
    })
  },
  components: {
    // EditTable,
    EditTableMul
  },
  methods: {
    handleEdit (row, index, column, newValue) {
      console.log(row, index, column, newValue)
    },
    turnTo () {
      let id = 'params' + (Math.random() * 100).toFixed(0)
      this.$router.push({
        name: 'params',
        params: {
          id
        }
      })
    }
  }
}

</script>
<style lang='less' scoped>
</style>
