<template>
  <el-form-item class="form-label" :prop="prop" :label="label">
    <el-input
      :placeholder="placeholder"
      size="medium"
      v-bind="$attrs"
      v-model="inputModel"
    />
  </el-form-item>
</template>
<script>
//  v-on:input="$emit('input', $event.target.value)"
export default {
  name: "BaseInput",
  inheritAttrs: false, //此处设置禁用继承特性
  props: {
    prop: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    label: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: ""
    },
    value: {
      type: String
    }
  },
  data() {
    return {
      inputModel: ""
    };
  },
  watch: {
    inputModel(o) {
      this.$emit("input", o);
    }
  }
};
</script>
<style lang="scss" scoped>
.el-input {
  width: 300px;
}
</style>
