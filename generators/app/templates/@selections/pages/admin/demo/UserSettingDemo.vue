<template>
  <el-main class="user-setting">
    <h4>个人设置</h4>
    <el-form
      hide-required-asterisk="true"
      ref="form"
      :model="form"
      :rules="rules"
      label-width="80px"
    >
      <base-input label="姓名:" prop="name" v-model="form.name" />

      <base-radio label="性别:" v-model="form.sex" v-bind:options="sexOption" />

      <el-form-item label="通知:">
        <el-switch v-model="form.notice"></el-switch>
      </el-form-item>

      <base-input label="邮件:" prop="email" v-model="form.email" />

      <base-input label="github:" v-model="form.github" />

      <base-input label="描述:" v-model="form.desc" />

      <el-form-item>
        <el-button type="primary" @click.prevent="onSubmit('form')"
          >更新设置</el-button
        >
      </el-form-item>
    </el-form>
  </el-main>
</template>

<script>
import BaseInput from "components/BaseInput.vue";
import BaseRadio from "components/BaseRadio.vue";
const MOCK_SEX = [
  {
    label: "男",
    value: "1"
  },
  {
    label: "女",
    value: "2"
  }
];
export default {
  components: { BaseInput, BaseRadio },
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
      form: {
        sex: 1,
        name: "",
        email: "",
        role: "",
        desc: "",
        github: "",
        notice: ""
      },
      sexOption: MOCK_SEX,
      rules: {
        name: [{ required: true, message: "必填项" }],
        email: [
          {
            validator: validateEmail
          }
        ]
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
.user-setting {
  margin: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
</style>
