# 快速上手
::: warning 注意
请确保你的 Node.js 版本 >= 8。<br>
请确保安装 [yoman](https://yeoman.io/learning/index.html)
:::


## 全局安装
如果你想使用generator-mdb-vue 你可以全局安装它：
```
npm install -g generator-webapp
或
yarn global add generator-webapp
```
安装成功后，在终端输入命令，查看是否安装成功
```
yo --generators
```
::: warning 注意
目前全局安装不支持<br>
搭建我们自己的npm私有库后，方可支持
:::
## 本地安装
如果你想使用generator-mdb-vue 你也可以本地安装它：
```
git clone https://gitlab.com/shangwfa/generator-mdb-vue.git
```
从GitLab上拉取代码，切换到对应代码仓库的根目录下，执行如下命令
```
npm install
或
yarn 
npm link
```
安装成功后，在终端输入命令，查看是否安装成功
```
yo --generators
```