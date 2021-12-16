// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//EventBus方法二  main.js
Vue.prototype.$EventBus = new Vue()
// 全局的不用引入event-bus.js，只需this.$EventBus就可以调用$emit、$on、$off等方法。

// 定义无参全局过滤器
// Vue.filter('msgFormat', function(msg) {    // msg 为固定的参数 即是你需要过滤的数据
//   return msg + 'xxxxxxxx'
// })

// 定义有参全局过滤器
Vue.filter('msgFormat', function(msg, arg1, arg2) {    // msg 为固定的参数 即是你需要过滤的数据
  return msg + 'xxxxxx' + arg1 + arg2
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
