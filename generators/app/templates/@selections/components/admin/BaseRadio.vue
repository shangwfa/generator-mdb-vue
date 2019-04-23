<template>
  <el-form-item :label="label">
    <el-radio-group v-model="radioModel">
      <el-radio
        v-for="option in options"
        :key="option.label"
        :label="option.label"
        >{{ option.value }}</el-radio
      >
    </el-radio-group>
  </el-form-item>
</template>
<script>
//  v-on:input="$emit('input', $event.target.value)"
export default {
  name: "BaseRadio",
  inheritAttrs: false, //此处设置禁用继承特性
  props: {
    label: {
      type: String,
      required: true
    },
    options: {
      type: Array
    }
  },
  data() {
    return {
      radioModel: ""
    };
  },
  watch: {
    radioModel(o) {
      this.$emit("input", o);
    }
  }
};
</script>
