import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test01 from '@/components/test01'
import toDoList from '@/components/toDoList'
import child from '@/components/child'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: "/test01",
      component: test01
    },
    {
      path: "/toDoList",
      component: toDoList
    },
    {
      path: "/child",
      component: child
    }
  ]
})
