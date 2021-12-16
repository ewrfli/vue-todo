// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//EventBus方法二  main.js
Vue.prototype.$EventBus = new Vue()
// 全局的不用引入event-bus.js，只需this.$EventBus就可以调用$emit、$on、$off等方法。

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
