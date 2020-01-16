import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入lib-flexible
import 'lib-flexible'

import Vant from 'vant'
import 'vant/lib/index.css'
// 导入公共样式文件
import './styles/base.css'
// 导入字体图标文件
import './styles/iconfont.css'

Vue.use(Vant)

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
