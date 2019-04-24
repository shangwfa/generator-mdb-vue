# 构建页面
通过终端命令交互式，快速构建页面<br>
命令构建工程的目录结构
![](https://github.com/shangwfa/img/blob/master/WX20190424-153740@2x.png?raw=true)
::: tip
注入目录src/pages
:::
命令终端，切换到当前项目工程根目录下，输入:yo mdb-vue:page 
![](https://github.com/shangwfa/img/blob/master/WX20190424-154816@2x.png?raw=true)
根据提示输入要创建页面的Name，输入:ProductDetail,回车
![](https://github.com/shangwfa/img/blob/master/WX20190424-154720@2x.png?raw=true)
根据页面需求，是否需要把store的数据映射到当前页面，输入:y/n,回车
![](https://github.com/shangwfa/img/blob/master/WX20190424-155144@2x.png?raw=true)
根据页面需求，是否添加当前页面的全局样式，输入:ye/n,回车
![](https://github.com/shangwfa/img/blob/master/WX20190424-155349@2x.png?raw=true)
生成对应页面
``` js
<template>
  <div class="product-detail"></div>
</template>
<script>
import { mapState } from "vuex";
import MTYPES from "store/mutation-types.js";
export default {
  name: "ProductDetailPage",
  components: {},
  data() {
    return {
      num: 0,
      value: ""
    };
  },
  watch: {
    value: {
      handler: "toLoadData",
      immediate: false
    }
  },
  computed: {
    ...mapState({
      isLogin: state => {
        return state.user.isLogin;
      }
    }),
    sum() {
      return this.num + 5;
    }
  },
  created() {},
  mounted() {},
  methods: {
    toLogin() {},
    toLoadData() {}
  }
};
</script>

<style lang="scss" scoped>
.product-detail {
}
</style>

<style lang="scss">
.product-detail {
}
</style>
```
::: tip
目前快速构建功能比较单一，后面根据业务场景，相同类型页面出现的频率增加相应的业务型页面，如：
- 表单类型页面
- 列表型页面
- 等其他
:::