const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

const BASE_URL = process.env.NODE_ENV === 'procution' ? '/iview-admin/' : '/'

module.exports = {
  baseUrl: BASE_URL,
  // 设置快捷路径名
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  // 打包时不生成.map文件
  productionSourceMap: false,
  // 配置跨域路径
  devServer: {
    proxy: 'http://localhost:8080'
  }
}

// module.exports = {
//   chainWebpack: config => {
//     config.module
//       .rule('vue')
//       .use('iview')
//       .loader('iview-loader')
//       .options({ prefix: false })
//   }
// }
