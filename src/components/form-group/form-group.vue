<!--  -->
<template>
  <Form ref="form" v-if="Object.keys(valueList).length" :label-width="labelWidth" :model="valueList" :rules="rules">
    <FormItem
    v-for="(item, index) in list"
    :prop="item.name"
    :key="`${_uid}_${index}`"
    :label="item.label"
    label-position="left"
    :error="errorStore[item.name]"
    @click.native="hanldeFocus(item.name)"
    >
      <component :is="item.type" :range="item.range" v-model="valueList[item.name]">
        <!-- 渲染子集 -->
        <template v-if="item.children">
          <component
          v-for="(child, i) in item.children.list"
          :is="item.children.type"
          :key="`${_uid}_${index}_${i}`"
          :value="child.value"
          :label="child.label"
          >
          {{ child.title }}
          </component>
        </template>
      </component>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="handleSubmit">提交</Button>
      <Button @click="handleReset">重置</Button>
    </FormItem>
  </Form>
</template>

<script>
import clonedeep from 'clonedeep'
import { sendFormData } from '@/api/data'
export default {
  name: 'FormGroup',
  data () {
    return {
      initValueList: [],
      valueList: {},
      rules: {},
      errorStore: {}
    }
  },
  props: {
    list: {
      type: Array,
      default: () => []
    },
    labelWidth: {
      type: Number,
      default: 100
    },
    url: {
      type: String,
      required: true
    }
  },
  methods: {
    setInitValue () {
      let rules = {}
      let valueList = {}
      let initValueList = {}
      let errorStore = {}
      this.list.forEach(item => {
        rules[item.name] = item.rule
        valueList[item.name] = item.value
        initValueList[item.name] = item.value
        errorStore[item.name] = ''
      })
      this.rules = rules
      this.valueList = valueList
      this.initValueList = initValueList
      this.errorStore = errorStore
    },
    handleSubmit () {
      this.$refs.form.validate(valid => {
        if (valid) {
          sendFormData({
            url: this.url,
            data: this.valueList
          }).then(res => {
            this.$emit('on-submit-success', res)
          }).catch(err => {
            this.$emit('on-submit-err', err)
            for (let key in err) {
              this.errorStore[key] = err[key]
            }
          })
        }
      })
    },
    handleReset () {
      this.valueList = clonedeep(this.initValueList)
    },
    hanldeFocus (name) {
      this.errorStore[name] = ''
    }
  },
  watch: {
    list () {
      this.setInitValue()
    }
  },
  mounted () {
    this.setInitValue()
  }
}
</script>
<style lang='less' scoped>
</style>
