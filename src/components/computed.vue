<template>
  <div class="computedFather">
    <p>原始字符串: {{ message }}</p>
    <p>computedReversed: "{{ computedReversed }}"</p>
    <p>methodsReversed: "{{ methodsReversed() }}"</p> <br>

    <label for="user">parent：</label>
    <input id="user" type="text" v-model="user.name">

    <computedChild :user="user"></computedChild>
  </div>
</template>

<script>
import computedChild from './sonComponents/computedChild.vue' //子组件中需要同时显示改变前和改变后的值。
export default {
  components: { 
    computedChild 
  },
  data() {
    return {
      user: { name: 'ligang' },
      message: 'abcdefg'
    }
  },
  // 计算属性
  computed: {
    // 计算属性的 getter
    computedReversed: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  },
  // 方法
  methods: {
    methodsReversed: function () {
      return this.message.split('').reverse().join('')
    }
  }
  //computed vs methods
  // 我们可以使用 methods 来替代 computed，效果上两个都是一样的，但是 computed 是基于它的依赖缓存，只有相关依赖发生改变时才会重新取值。而使用 methods ，在重新渲染的时候，函数总会重新调用执行。
}
</script>

<style type="text/css" scoped>
.computedFather{
  width: 500px;
  margin: 0 auto;
  border: tomato solid 1px;
}
</style>
