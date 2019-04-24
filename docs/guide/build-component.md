# 构建组件
通过终端命令交互式，快速构建组件<br>
命令构建工程的目录结构
![](https://github.com/shangwfa/img/blob/master/WX20190424-153740@2x.png?raw=true)
::: tip
组件类型：base,business和page
- base 注入目录src/components/base  无业务可复用组件
- business 注入目录src/components/business 带业务可复用组件
- page 注入目录src/pages/xx-page/ 带业务不复用组件
:::

命令终端，切换到当前项目工程根目录下，输入:yo mdb-vue:component 
![](https://github.com/shangwfa/img/blob/master/WX20190424-163519@2x.png?raw=true)
根据要创建的组件需求，选择对应的组件类型，回车
![](https://github.com/shangwfa/img/blob/master/WX20190424-163752@2x.png?raw=true)
根据提示，输入要创建组件的Name,输入:CardItem,回车
![](https://github.com/shangwfa/img/blob/master/WX20190424-164219@2x.png?raw=true)
根据提示，输入n,回车
![](https://github.com/shangwfa/img/blob/master/WX20190424-164240@2x.png?raw=true)
根据要创建的组件需求，是否需要把store的数据映射到当前页面，输入:y/n,回车
![](https://github.com/shangwfa/img/blob/master/WX20190424-171831@2x.png?raw=true)
根据要创建的组件需求，是否添加插槽，输入:y，回车
![](https://github.com/shangwfa/img/blob/master/WX20190424-165230@2x.png?raw=true)
根据要创建的组件需求，选择插槽的类型，选择default/scope
![](https://github.com/shangwfa/img/blob/master/WX20190424-165230@2x.png?raw=true)
根据要创建的组件需求，是否添加当前页面的全局样式，输入:y/n,回车
![](https://github.com/shangwfa/img/blob/master/WX20190424-165253@2x.png?raw=true)
生成对应页面
``` js
<template>
  <div class="card-item">
    <slot></slot>
  </div>
</template>
<script>
import { mapState } from "vuex";
import MTYPES from "store/mutation-types.js";
export default {
  name: "CardItem",
  components: {},
  props: {
    name: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      num: 0
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
.card-item {
}
</style>

<style lang="scss">
.card-item {
}
</style>

```
::: tip
目前快速构建功能比较单一，后面根据业务场景，相同类型组件出现的频率增加相应的业务型组件
:::