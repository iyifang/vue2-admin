const path = require('path')

// 连接路径
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '/', // 项目部署的基础路径
  outputDir: 'dist', // 打包时生成的文件目录名称
  assetsDir: 'static', // 打包放置静态资源的路径目录
  lintOnSave: process.env.ENV === 'development', // 设置是否在开发环境下每次保存代码时都启用 eslint验证
  productionSourceMap: false, // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建,source map 直译过来就是资源地图。所以，source map的作用就是定位。source map定位的时浏览器控制台输出语句在项目文件的位置。
  // 配置跨域
  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        target: process.env.VUE_APP_BASE_API, // 真实地址
        changeOrigin: true, // 允许跨域
        pathRewrite: {
          '^/api': '/',  //重写请求路径
        },
      }
    }
  },
  // webpack配置,相关配置可查询webpack官网
  configureWebpack: {
    resolve: { // webpack中使用resolve字段来配置模块的相关解析策略
      alias: {
        '@': resolve('src')
      }
    }
  }
}