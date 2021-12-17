import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test01 from '@/components/test01'
import toDoList from '@/components/toDoList'
import child from '@/components/sonComponents/child'
import mixinDetails from '../components/mixinDetails.vue'
import sfatherComponent from '../components/sfatherComponent.vue'
import busA from '../components/busA.vue'
import busB from '../components/busB.vue'
import watch from '../components/watch.vue'
import computed from '../components/computed.vue'
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
    },
    {
      path: "/mixinDetails",
      component: mixinDetails
    },
    {
      path: "/sfatherComponent",
      component: sfatherComponent
    },
    {
      path: "/busA",
      component: busA
    },
    {
      path: "/busB",
      component: busB
    },
    {
      path: "/watch",
      component: watch
    },
    {
      path: "/computed",
      component: computed
    }
  ]
})
