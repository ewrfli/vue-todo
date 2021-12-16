<template>
  <div>
    <h1>{{title}}</h1>
    <h1>多多今年{{age}}岁了</h1>
  </div>
</template>

<script>
import { minxin } from '../mixin/mixin.js' // 引入minixn
export default {
  mixins: [minxin], // 这里一定不要把单词写错 mixins：[引入的名字]
  data () {
    return {
      title: '萌二招财猫',
      age: 25  // minxin.js中是写的22 但是页面展示出来会是25 这是因为当 minxin.js中的属性和组件的属性重复时会使用组件的
    }
  },
  created () {
   // 另外在控制台 还会看到打印一句  ‘萌二和阿呆去看日出’ 这是因为minxin.js中的方法属于这个组件了
    console.log('mixinDetails中方法:',this.message) // “师父” 打印出来的是minxin中的data中的内容 
  }
}
</script>
<style scoped>
div {
  width: 100%;
  height: 800px;
  overflow: scroll;
}
</style>