module.exports = {
  devServer: {
    open: true
  },
  // rem的配置
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            // 其实就是设计图的 rootFontSize
            // 这里推荐写37.5
            // 考虑到如果使用了第三方的ui库，会有问题。
            // 量设计图的时候，把设计图缩小一倍
            remUnit: 36
          })
        ]
      }
    }
  }
}
