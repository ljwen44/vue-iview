<template>
  <div class="form-wrapper">
    <!-- <FormGroup :list="formList" :url="url"></FormGroup> -->
    <Button type="primary" @click="handleSubmit">提交</Button>
    <Button @click="handleReset">重置</Button>
    <form-single
      ref="formSingle"
      v-for="(item, index) in formList"
      :key="`form_${index}`"
      :config="item"
      :value-data="valueData"
      :rule-data="ruleData"
      :error-store="errorStore"
    ></form-single>
  </div>
</template>

<script>
// import FormGroup from '_c/form-group'
import FormSingle from '_c/form-single'
import fromData from '@/mock/response/form-data'
import clonedeep from 'clonedeep'
import { sendFormData } from '@/api/data'

export default {
  components: {
    // FormGroup,
    FormSingle
  },
  data () {
    return {
      url: '/data/formData',
      formList: fromData,
      valueData: {},
      errorStore: {},
      ruleData: {},
      initValueData: {}
    }
  },
  methods: {
    handleSubmit () {
      // this.$refs.form.validate(valid => {
      //   if (valid) {
      //     sendFormData({
      //       url: this.url,
      //       data: this.valueData
      //     }).then(res => {
      //       this.$emit('on-submit-success', res)
      //     }).catch(err => {
      //       this.$emit('on-submit-err', err)
      //       for (let key in err) {
      //         this.errorStore[key] = err[key]
      //       }
      //     })
      //   }
      // })
      let isValid = true
      this.$refs.formSingle.forEach(item => {
        item.validate(valid => {
          if (!valid) isValid = false
        })
      })
      if (isValid) {
        sendFormData({
          url: this.url,
          data: this.valueData
        }).then(res => {
          this.$emit('on-submit-success', res)
        }).catch(err => {
          this.$emit('on-submit-err', err)
          for (let key in err) {
            this.errorStore[key] = err[key]
          }
        })
      }
    },
    handleReset () {
      this.valueData = clonedeep(this.initValueData)
    }
  },
  mouted () {
    let valueData = {}
    let errorStore = {}
    let ruleData = {}
    let initValueData = {}
    FormData.foreach(item => {
      valueData[item.name] = item.value
      ruleData[item.name] = item.rule
      errorStore[item.name] = ''
      initValueData[item.name] = item.value
    })
    this.valueData = valueData
    this.ruleData = ruleData
    this.errorStore = errorStore
    this.initValueData = initValueData
  }
}
</script>

<style lang="less" scope>
.form-wrapper{
  padding: 20px
}
</style>
