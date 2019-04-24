# 介绍
generator-mdb-vue 由三部分组成：可配置化初始化工程快速生成，可配置化工程页面快速生成和可配置化组件快速生成。它诞生的初衷：
- 根据不同的业务产品类型，快速构建适合不同产品的前端工程初始化项目
- 开发过程中快速生成页面级，组件级模板代码，最大程度减少冗余性重复性工作
- 自动注入配置，帮助开发人员专注于业务开发

项目结构如下：
```
.
├─ docs
├─ generators
│  ├─ app
│  │  ├─src
│  │  ├─templates
│  │  └─index.js
│  ├─ component
│  │  ├─src
│  │  ├─templates
│  │  └─index.js
│  └─ page
│     ├─src
│     ├─templates
│     └─index.js
├─ package.json
└─ README.md
```

