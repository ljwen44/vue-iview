<!--  -->
<template>
  <Form ref="form" v-if="config" :label-width="100" :model="valueData" :rules="ruleData">
    <FormItem
    :prop="config.name"
    :key="`${_uid}`"
    :label="config.label"
    label-position="left"
    :error="errorStore[config.name]"
    @click.native="hanldeFocus(config.name)"
    >
      <component :is="config.type" :range="config.range" v-model="valueData[config.name]">
        <!-- 渲染子集 -->
        <template v-if="config.children">
          <component
          v-for="(child, i) in config.children.list"
          :is="config.children.type"
          :key="`${_uid}_${i}`"
          :value="child.value"
          :label="child.label"
          >
          {{ child.title }}
          </component>
        </template>
      </component>
    </FormItem>
  </Form>
</template>

<script>
export default {
  name: 'FormSingle',
  props: {
    valueData: {
      type: Object,
      default: () => ({})
    },
    ruleData: {
      type: Object,
      default: () => ({})
    },
    errorStore: {
      type: Object,
      default: () => ({})
    },
    config: Object
  },
  methods: {
    hanldeFocus (name) {
      this.errorStore[name] = ''
    },
    validate (callback) {
      this.$refs.form.validate(valid => {
        callback(valid)
      })
    }
  }
}

</script>
<style lang='less' scoped>
</style>
