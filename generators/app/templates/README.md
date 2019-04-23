# vue-mdb-admin
## 简介
vue-mdb-admin 是一个后台前端解决方案，它基于 vue全家桶 和 element-ui实现。使用了最新的前端技术栈：
  - 内置了 i18n 国际化解决方案
  - 动态路由
  - 权限验证
  - 数据mock
  - 提炼了典型的业务模型，提供了丰富的功能组件
它可以帮助你快速搭建企业级中后台产品原型。
## 跑起来工程
- 安装依赖
```
yarn
```
- 启动本地服务，开发
```
yarn serve
```

## 工程结构
 - mdb
    - node_modules
      - 工程依赖包，由npm/yarn根据 package.json 产生
    - public
    - src（核心代码）
        - api
          - index 网络访问统一入口
            - 网络req公参统一注入
            - 网络req 参数优化处理
            - 请求白名单，自由切换Content-Type
            - 网络res 公共逻辑统一处理（根据业务错误码）
            - 网络res 响应优化处理返回
          - path
            - 全局唯一Api接口集合
            - 为vuex提供接口层面的MutationType
        - assets
          - 静态图片资源
          - iconfont
          - 其他资源
        - components
          - base 
            - 公共基础组件(方便一线开发人员使用)
            - 只用于视图展示，无具体产品业务
          - business
            - 公共业务组件（含产品公共业务）
        - directives
          - dom节点级别的控制
          - 示例
            - 指令 v-login 需要登录，未登录情况下的统一逻辑处理
            - 指令 v-focus 页面加载完成，表单输入框自动获取表单
            - 指令 v-outside 判断点击事件是否落在当前dom节点上
            - 指令 v-permission 页面按钮级别的权限控制
            - 扩展，可以用于页面按钮级别的埋点处理
        - filters
          - 常用字符处理过滤器
          - 常用金额处理过滤器
          - 常用日期处理过滤器
        - icons
          - SVG资源
        - lang
          - 采用vue-i18n 实现国际化
          - 提供不同国家的语言包
          - 结构
            - index.js
            - zh.js
            - en.js
        - mixin
          - 组件级别功能逻辑复用方式
          - 全局混入
            - 注入页面跳转传递的参数query
            - 注入组件级路由变化监听
            - 等等
          - 局部混入
            - 注入分页加载逻辑
            - 注入Table显示逻辑
            - 等等
        - plugins
          - 提供全局常亮
          - 提供全局工具包
          - 提供全局表单校验工具包
        - router
          - 全量路由表分为：
            - 常量路由表
            - 动态路由表
          - 路由表重置功能 
        - store
          - 根据产品业务拆分store,store目录结构:
            - index.js  组装模块并导出 store 的地方
            - mutations.js 根级别的mutations
            - actions.js 根级别的actions
            - getters.js 根级别的getters
            - mutation-types.js 全局mutationType
            - modules
              - app 应用模块
              - user  用户模块
              - permission 权限模块
              - 等等
        - styles
          - index.scss 组装样式并导致的地方
          - variables.scss 定义常用变量：色值，数值等
          - common.scss 通用，高频使用的样式
          - mixin.scss 混入样式，提高样式复用
          - sidebar.scss 侧栏样式
          - 等等
        - pages(页面级组件)
          - layout
            - index.vue 根布局文件入口
            - app-main.vue 主内容显示区
            - navbar.vue  顶部导航栏
            - sidebar 侧栏
          - login（登录页面）
            - index.vue
        - App.vue(根级组件)
        - errorLog.js(异常信息捕获)
        - main.js（应用入口文件）
        - permission.js (顶级路由权限控制)
    - tests(单测)
    - eslintrc.js(ESLint配置文件)
    - balel.config.js（balel配置文件）
    - jest.config.js（单测配置文件）
    - package.json
    - postcss.config.js（PostCss 配置文件）
## 统一开发环境（必须）
- 开放软件 VScode
- 安装相关插件
  - Vetur
  - ESLint
  - Prettier - Code formatter 
- 实现代码统一规范（采用Prettier标准）
  - 保持自动格式化
- 导入智能提示
  - Path Intellisense
- 谷歌浏览器在谷歌商店安装Vue.js devtools
 - 查看vuex store数据
 - 组件结构查看
 - Mutation 追踪查询
 - 时间穿梭
 ![pic](https://raw.githubusercontent.com/vuejs/vue-devtools/dev/media/screenshot-shadow.png)

 - 别名路径智能提示
  - 涉及文件 vue.config.js .vscode/setting.json  jsconfig.json
  - 示例:
    - vue-config.js
      ```
      chainWebpack: config => {
        config.resolve.alias
          .set("@", resolve("src"));
      }
      ```
    - .vscode/setting.json
    ```
    "path-intellisense.mappings": {
        "@": "${workspaceRoot}/src",
    }
    ```
    - jsconfig.json
    ```
    {
    "compilerOptions": {
      "baseUrl": ".",
      "paths": {
        "@/*": ["./*"]
      }
    }
  }
    ```
- 自动生成头部注释
  - 安装插件  koroFileHeader
  - ctrl+cmd+i自动生成文件头部注释
## 最佳实践
- Vue 最佳实践
  - Vue 属性书写顺序（必须）
    ```
    export default {
      name,
      components,
      mixins,
      props,
      data,
      computed，
      watch,
      created,
      mounted,
      //其他生命周期函数
      methods
    }
    ```
  - 组件
    - 组件书写顺序
      ```
      <template></template>
      <script></script>
      <style></style>
      ```
    - 组件命名
      ```
      <template>
        <my-components></my-components>
      </template>

      <script>
        import MyComponents from './MyComponents.vue'

        export default {
          components: {
            MyComponents
          }
        }
      </script>
      ```
    - 基础组件命名（应用特定样式和约定的基础组件 (也就是展示类的、无逻辑的或无状态的组件) 应该全部以一个特定的前缀开头，如：Base,App,Bu）
      ```
      components/(基础组件)
        |- BaseButton.vue
        |- BaseTable.vue
        |- BaseIcon.vue

      components/（应用级组件）
        |- AppButton.vue
        |- AppTable.vue
        |- AppIcon.vue
      components/(业务级组件)
        |- BuButton.vue
        |- BuTable.vue
        |- BuIcon.vue
      ```
    - 单例组件名(有单个活跃实例的组件应该以 The 前缀命名，以示其唯一性)
      ```
      components/
      |- TheHeading.vue
      |- TheSidebar.vue
      ```
    - 紧密耦合的组件名
      ```
      components/
      |- TodoList.vue
      |- TodoListItem.vue
      |- TodoListItemButton.vue
      ```
    - 组件名中的单词顺序(组件名应该以高级别的 (通常是一般化描述的) 单词开头，以描述性的修饰词结尾)
      ```
      components/
      |- SearchButtonClear.vue
      |- SearchButtonRun.vue
      |- SearchInputQuery.vue
      |- SearchInputExcludeGlob.vue
      |- SettingsCheckboxTerms.vue
      |- SettingsCheckboxLaunchOnStartup.vue
      ```
    - 自闭合组件
      ```
      <!-- 在单文件组件、字符串模板和 JSX 中 -->
      <MyComponent/>
      <!-- 在 DOM 模板中 -->
      <my-component></my-component>
      ```
    - 完整单词的组件名
      - 反例
        ```
        components/
        |- SdSettings.vue
        |- UProfOpts.vue
        ```
      - 好例子
        ```
        components/
        |- StudentDashboardSettings.vue
        |- UserProfileOptions.vue
        ```
    - Prop 名大小写
      ```
      props: {
        greetingText: String
      }

      <welcome-message greeting-text="hi"></welcome-message>
      ```
    - 多个特性的元素
      - 反例
        ```
        <my-component foo="a" bar="b" baz="c"></my-component>
        ```
      - 好例子
        ```
        <my-component 
          foo="a" 
          bar="b" 
          baz="c">
        </my-component>
        ```
    - 模板中简单的表达式(组件模板应该只包含简单的表达式，复杂的表达式则应该重构为计算属性或方法)
      - 反例
        ```
        {{
          fullName.split(' ').map(function (word) {
            return word[0].toUpperCase() + word.slice(1)
          }).join(' ')
        }}
        ```
      - 好例子
        ```
        <!-- 在模板中 -->
        {{ normalizedFullName }}
        / 复杂表达式已经移入一个计算属性
        computed: {
          normalizedFullName: function () {
            return this.fullName.split(' ').map(function (word) {
              return word[0].toUpperCase() + word.slice(1)
            }).join(' ')
          }
        }
        或
        methods:{
          normalizedFullName: function () {
            return this.fullName.split(' ').map(function (word) {
              return word[0].toUpperCase() + word.slice(1)
            }).join(' ')
          }
        }
        ```
      - 简单的计算属性(应该把复杂计算属性分割为尽可能多的更简单的属性)
        - 反例
          ```
          computed: {
            price: function () {
              var basePrice = this.manufactureCost / (1 - this.profitMargin)
              return (
                basePrice -
                basePrice * (this.discountPercent || 0)
              )
            }
          }
          ```
        - 好例子
          ```
          computed: {
            basePrice: function () {
              return this.manufactureCost / (1 - this.profitMargin)
            },
            discount: function () {
              return this.basePrice * (this.discountPercent || 0)
            },
            finalPrice: function () {
              return this.basePrice - this.discount
            }
          }
          ```
        - 指令缩写(用 : 表示 v-bind: 和用 @ 表示 v-on:)
          ```
          <input
            :value="newTodoText"
            :placeholder="newTodoInstructions"
          >
          ```
        - 组件的 data 必须是一个函数
          ```
          export default {
            data () {
              return {
                foo: 'bar'
              }
            }
          }
          ```
      - Prop 定义应该尽量详细
        ```
        props: {
          id:{
            type:Number,
            default:0,
            required:true
          },
          info:{
            type:Object,
            default:{
              name:'xxx',
              age:18
            }
          },
          status: {
            type: String,
            required: true,
            validator: function (value) {
              return [
                'syncing',
                'synced',
                'version-conflict',
                'error'
              ].indexOf(value) !== -1
            }
          }
        }
        ```
      - 为v-for设置key值
        - 反例
          ```
          <ul>
            <li v-for="todo in todos">
              {{ todo.text }}
            </li>
          </ul>

          <ul>
            <li v-for="(todo,index) in todos" :key="index">
              {{ todo.text }}
            </li>
          </ul>
          ```
        - 好例子
          ```
          <ul>
            <li
              v-for="todo in todos"
              :key="todo.id"
            >
              {{ todo.text }}
            </li>
          </ul>
          ```
      - 过滤器的使用
        - 格式化日期
          ```
          <span>{{date | dateFormat('YYYY-MMMM')}}</span>
          <span>{{timestamp | timeToNow}}</span>
          ```
        - 变化字符串
          ```
          <span>{{msg | capitalize}}</span>
          <span>{{msg | placeholder('我是默认值')}}</span>
          ```
        - 格式化金额
          ```
          <span>{{amount | toThousands}}</span>
          ```
      - 自定义指令的使用
        - v-login
          ```
          <button v-login>去下单</button>
          <div v-login=“unLoginProcess”>去支付</div>
          ```
        - v-focus
          ```
          <input v-focus></input>
          ```
        - v-outside
          ```
          <div v-outside="toProcess">没点中我</div>
          ```
        - v-permission
          ```
          <div v-permission="btnRole">按钮权限控制</div>
          data () {
              return {
                btnRole: {page:'xxxx',role:'ensure'}
              }
            }
          ```
      - methods 与 computed 区别
        - methods 里的方法，与 computed 里的方法，可以起到同样的作用
        - methods：只要页面重新渲染，methods 中的方法就会重新执行；不渲染，就不执行。
        - computed：不管页面是否渲染，只要计算属性依赖的数据未发生改变，那么计算属性就不会发生变化，因为计算属性是基于它的缓存的。只有当计算属性依赖的数据发生变化时，计算属性才会重新取值。
        - 什么情况下使用methods或computed？取决于你是否要使用缓存
      - 禁止内联样式，表达式
        ```
        <span style="{ color:'red', fontSize: 14 + 'px' }"></span>
        ```
        ```
        <span>{{a+b*c}}</span>
        ```
      - 绑定class的几种方式
        - 直接绑定样式
          ```
            <div class="red border">天上的星星笑地上的人</div>

            <style>
              .red {
                color: red;
              }
              .border {
                border: 1px solid blue;
              }
            </style>      
            ```
        - 变量语法
          ```
            <div :class="classes">天上的星星笑地上的人</div>
            
            computed: {                        
              classes: function () {
                return 'red border'
              }
            }

            <style>
              .red {
                color: red;
              }
              .border {
                border: 1px solid blue;
              }
            </style>      
            ```
        - 对象语法
          ```
          <div :class="classes">天上的星星笑地上的人</div>

          data: {
            isRed: true,
            isBorder: true
          },
          computed: {                        
            classes: function () {
              return {red: this.isRed, border: this.isBorder}
            }
          }

          <style>
            .red {
              color: red;
            }
            .border {
              border: 1px solid blue;
            }
          </style>      
          ```
        - 数组语法
          ```
          <div :class="[red,border]">天上的星星笑地上的人</div>

          data: {
            red: 'red',         
            border: 'border'  
          }

          <style>
            .red {
              color: red;
            }
            .border {
              border: 1px solid blue;
            }
          </style>   
          ```
          
        - 对象和数组混合使用
          ```
          <div :class="[red,classes]">天上的星星笑地上的人</div>

          data: {
            red: 'red',
            isBorder: true
          },
          computed: {                        
            classes: function () {
              return { border: this.isBorder}
            }
          }

          <style>
            .red {
              color: red;
            }
            .border {
              border: 1px solid blue;
            }
          </style>      
          ```
## 快速开始
 - 功能需求：拿到一个做邀请列表的新页面
 - 在目录 ./src/pages下，新建文件夹InvitationList
  - 在InvitationList文件夹下 InvitationList.vue 文件
    ![](https://ws3.sinaimg.cn/large/005BYqpgly1g233krmuxhj31dk0u0qan.jpg)
  - 根据UI视觉图，页面拆为两个组件:
    - InvitationListTop.vue
    ![](https://ws3.sinaimg.cn/large/005BYqpgly1g233n6xtavj32jm08ygn6.jpg)
    - InvitationListTable.vue
    ![](https://ws3.sinaimg.cn/large/005BYqpgly1g233omk05kj32ju0hqtcl.jpg)
  - 页面目录结构
    ```
    InvitationList/(邀请列表页面)
      |- InvitationList.vue
      |- InvitationListTop.vue
      |- InvitationListTable.vue
    ```
  - 从服务端那邀请列表页面数据
    - 涉及接口
      - /invitation/statistics
      - /invitation/list
    - 在./src/api/path.js中添加上面的两个接口
    ![](https://ws3.sinaimg.cn/large/005BYqpgly1g2340disq4j311u0a4gno.jpg)
    - 在./src/store/modules/invitation
    ```
    import MTYPES from "../mutation-types";
    import api from "../../api";
    import path from "../../api/path";

    const initState = {
      statistics: {},
      list: []
    };

    const invitation = {
      state: {
        ...initState,
        initState
      },
      mutations: {
        [MTYPES.GET_INVITATION_STATISTICS]: (state, payload) => {
          state.statistics = payload;
        },
        [MTYPES.GET_INVITATION_LIST]: (state, payload) => {
          state.list = payload;
        }
      },
      actions: {
        async [MTYPES.GET_INVITATION_STATISTICS]({ commit }, params) {
          const response = await api(path.GET_INVITATION_STATISTICS, params);
          commit(MTYPES.GET_INVITATION_STATISTICS, response.data);
          return response;
        },
        async [MTYPES.GET_INVITATION_LIST]({ commit }, params) {
          const response = await api(path.GET_INVITATION_LIST, params);
          commit(MTYPES.GET_INVITATION_LIST, response.data);
          return response;
        }
      },
      getters: {}
    };

    export default invitation;

    ```
  - 具体页面开发
    - InvitationList.vue
      ```
      <template>
        <el-main class="innvitation-list">
          <invitation-list-top></invitation-list-top>
          <invitation-list-table></invitation-list-table>
        </el-main>
      </template>

      <script>
        import InvitationListTop from "./InvitationListTop";
        import InvitationListTable from "/InvitationListTable";
        export default {
          name: "InvitationList",
          components: {
            InvitationListTop,
            InvitationListTable
          }
        };
      </script>

      <style scoped>
      .innvitation-list {
        margin: 10px;
      }
      </style>

      ```
    - InvitationListTop.vue
      ```
        <template>
          <el-card class="intivation-list-top">
            <el-row :gutter="20">
              <el-col :span="4">
                <div class="item-row">
                  <img :src="imgUrl" />
                </div>
              </el-col>
              <el-col :span="4">
                <div class="item-row">
                  <p class="item-row-subtitle">总计邀请(个)</p>
                  <p class="item-row-count">
                    {{ totalCount }}
                  </p>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="item-row">
                  <p class="item-row-subtitle">正在进行中(个)</p>
                  <p class="item-row-count">
                    {{ ingCount }}
                  </p>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="item-row">
                  <p class="item-row-subtitle">已完成(个)</p>
                  <p class="item-row-count">
                    {{ finishCount }}
                  </p>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="item-row">
                  <p class="item-row-subtitle">完成平均时长(天)</p>
                  <p class="item-row-count">
                    {{ timeDay }}
                  </p>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="item-row">
                  <p class="item-row-subtitle">参与成员(人)</p>
                  <p class="item-row-count">
                    {{ numberNum }}
                  </p>
                </div>
              </el-col>
            </el-row>
          </el-card>
        </template>
        <script>
        import MTYPES from "store/mutation-types.js";
        export default {
          name: "InvitationListTop",
          data() {
            return {
              imgUrl: "",
              totalCount: 0,
              ingCount: 0,
              finishCount: 0,
              timeDay: 0,
              numberNum: 0
            };
          },
          created() {
            this.initLoad();
          },
          methods: {
            initLoad() {
              this.$store
                .dispatch(MTYPES.GET_INVITATION_STATISTICS, {})
                .then(res => {
                  this.imgUrl = res.data.imgUrl;
                  this.totalCount = res.data.totalCount;
                  this.ingCount = res.data.totalCount;
                  this.finishCount = res.data.finishCount;
                  this.timeDay = res.data.timeDay;
                  this.numberNum = res.data.numberNum;
                })
                .catch(error => {
                  console.log("error", error);
                });
            }
          }
        };
        </script>

        <style lang="scss" scoped>
        .intivation-list-top {
          margin-bottom: 40px;
          .item-row {
            height: 120px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .item-row-subtitle {
            color: rgb(102, 102, 102);
            font-size: 14px;
          }
          .item-row-count {
            color: rgb(51, 51, 51);
            font-size: 36px;
            margin-top: 10px;
          }
        }
        </style>

      ```
    - InvitationListTable.vue
      ```
        <template>
          <div class="invatation-list-table">
            <div>
              <h4 class="tableTitle">邀请列表</h4>
              <el-button class="tableAction" type="primary">主要按钮</el-button>
            </div>
            <el-table :data="dataList" style="width: 100%">
              <el-table-column label="姓名">
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span class="ml-10">{{ scope.row.name }}</span>
                </template>
              </el-table-column>
              <el-table-column label="邮箱">
                <template slot-scope="scope">
                  <span class="ml-10">{{ scope.row.email }}</span>
                </template>
              </el-table-column>
              <el-table-column label="职位">
                <template slot-scope="scope">
                  <span class="ml-10">{{ scope.row.address }}</span>
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button
                    type="text"
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)"
                    >修改</el-button
                  >
                  <el-button
                    type="text"
                    size="mini"
                    @click="handleDelete(scope.$index, scope.row)"
                    >删除</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
          </div>
        </template>
        <script>
        import MTYPES from "store/mutation-types.js";
        export default {
          data() {
            return {
              dataList: []
            };
          },
          created() {
            this.initLoad();
          },
          methods: {
            initLoad() {
              this.$store.dispatch(MTYPES.GET_INVITATION_LIST, {}).then(res => {
                this.dataList = res.data;
              });
            },
            handleEdit(index, row) {
              console.log(index, row);
              alert("edit::" + index);
            },
            handleDelete(index, row) {
              console.log(index, row);
              alert("delete::" + index);
            }
          }
        };
        </script>

        <style lang="scss" scoped>
        .invatation-list-table {
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
          padding: 20px;
          .tableTitle {
            display: inline;
            text-align: bottom;
          }
          .tableAction {
            float: right;
            display: inline;
          }
          ml-10 {
            margin: 0 0 0 10px;
          }
        }
        </style>

      ```
    


    
