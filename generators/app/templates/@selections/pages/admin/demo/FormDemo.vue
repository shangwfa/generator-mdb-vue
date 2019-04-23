<template>
  <el-main class="demo">
    <h4>新增成员</h4>
    <el-form
      hide-required-asterisk="true"
      ref="form"
      :model="form"
      :rules="rules"
      label-width="80px"
    >
      <base-input
        label="姓名:"
        prop="name"
        v-model="form.name"
        placeholder="Enter your username"
      />

      <base-input
        label="邮箱:"
        prop="email"
        v-model="form.email"
        placeholder="Enter your email"
      />

      <base-select
        prop="role"
        label="角色:"
        placeholder="请选择"
        v-model="form.role"
        v-bind:options="roleOptions"
      />

      <el-form-item>
        <el-button type="primary" @click.prevent="onSubmit('form')"
          >确认</el-button
        >
      </el-form-item>
    </el-form>
  </el-main>
</template>

<script>
import BaseInput from "components/BaseInput.vue";
import BaseSelect from "components/BaseSelect.vue";
const MOCK_ROLES = [
  {
    label: "评测人",
    value: "tester"
  },
  {
    label: "主理人",
    value: "admin"
  }
];
export default {
  components: { BaseInput, BaseSelect },
  data() {
    var validateEmail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入邮箱"));
      } else {
        if (this.form.email.indexOf("@") == -1) {
          callback(new Error("请输入正确的邮箱"));
        }
        callback();
      }
    };
    return {
      roleOptions: MOCK_ROLES,
      form: {
        name: "",
        email: "",
        role: ""
      },
      testName: "",
      rules: {
        name: [{ required: true, message: "必填项" }],
        email: [
          {
            validator: validateEmail
          }
        ],
        role: [{ required: true, message: "请选择角色" }]
      }
    };
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit success!" + JSON.stringify(this.$data.form));
          this.$refs[formName].resetFields();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style>
.demo {
  margin: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
</style>
