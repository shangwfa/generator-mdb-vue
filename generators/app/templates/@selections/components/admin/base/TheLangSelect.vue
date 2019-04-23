<template>
  <el-dropdown
    trigger="click"
    class="international"
    @command="handleSetLanguage"
  >
    <div>
      <svg-icon class-name="international-icon" icon-class="language" />
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item :disabled="isZh" command="zh">中文</el-dropdown-item>
      <el-dropdown-item :disabled="isEn" command="en">English</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import MTYPES from "store/mutation-types.js";
export default {
  name: "LangSelect",
  computed: {
    isZh() {
      return this.$store.getters.language === "zh";
    },
    isEn() {
      return this.$store.getters.language === "en";
    }
  },
  methods: {
    handleSetLanguage(lang) {
      this.$i18n.locale = lang;
      console.log(MTYPES.SET_LANGUAGE, lang);
      this.$store.commit(MTYPES.SET_LANGUAGE, lang);
      this.$message({
        message: this.$t("lang.tipSuccess"),
        type: "success"
      });
    }
  }
};
</script>
