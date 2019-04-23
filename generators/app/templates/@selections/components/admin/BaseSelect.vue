<template>
  <el-form-item prop="role" :label="label">
    <el-select size="medium" v-model="selectModel" :placeholder="placeholder">
      <el-option
        v-for="option in options"
        :key="option.value"
        :label="option.label"
        :value="option.value"
      />
    </el-select>
  </el-form-item>
</template>
<script>
export default {
  name: "BaseSelect",
  props: {
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
    },
    options: {
      type: Array
    }
  },
  data() {
    return {
      selectModel: ""
    };
  },
  watch: {
    selectModel(val) {
      this.$emit("input", val);
    }
  }
};
</script>
<style lang="scss" scoped>
.el-select {
  width: 300px;
}
</style>
