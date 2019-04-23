const path = require("path");
const yargs = require("yargs");

function resolve(dir) {
  return path.join(__dirname, dir);
}
const proxyTarget = {
  dev: {
    baseUrl: "http://yapi.demo.qunar.com/mock/65982/"
  },
  test: {
    baseUrl: "https://easy-mock.com/mock/5bbef26ad6735265fe8afac2/imada"
  },
  mock: {
    baseUrl: "https://easy-mock.com/mock/5bbef26ad6735265fe8afac2/imada"
  }
};

const argv = yargs.argv;
const target = proxyTarget[argv.env] || proxyTarget.dev;
console.log("proxy ", target);

module.exports = {
  lintOnSave: true,
  // eslint-disable-next-line no-unused-vars
  configureWebpack: config => {
    let myConfig = {};
    if (process.env.NODE_ENV === "production") {
      console.log("为生产环境修改配置...");
    } else {
      console.log("为开发环境修改配置...");
    }
    return myConfig;
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("styles", resolve("src/styles"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"))
      .set("store", resolve("src/store"));
    config.module
      .rule("svg")
      .exclude.add(resolve("src/icons"))
      .end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]"
      })
      .end();
  },
  devServer: {
    open: process.platform === "darwin",
    port: 8888,
    https: false,
    hotOnly: false,
    proxy: {
      "/api": {
        target: target.baseUrl,
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },

  // 第三方插件配置
  pluginOptions: {},

  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/styles/index.scss";'
      }
    }
  }
};
