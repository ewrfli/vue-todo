<template>
  <div class="watchDiv">
    watch
    <input type="text" v-model="num">
    <h3>{{num}}</h3>  <br>

    <p style="color: red">obj.a: {{obj.a}}</p>
    <p style="color: red">obj.a: <input type="text" v-model="obj.a"></p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      num: 'null',
      obj: {
        a: 123
      }
    }
  },
  watch: {
    num(newVal, oldVal) {
      // 1.监听 num 属性的数据变化 
      // 作用 : 只要 num 的值发生变化,这个方法就会被调用
      // 第一个参数 : 新值
      // 第二个参数 : 旧值,之前的值
      console.log('oldVal:',oldVal)
      console.log('newVal:',newVal)
    },
    

    // 2. handler方法和immediate属性：
    // 上面的例子是值变化时候，watch才执行，我们想让值最初时候watch就执行就用到了handler和immediate属性
 
      // 数据发生变化就会调用这个函数  
      firstNum: {
        // 代表在wacth里声明了firstNum这个方法之后立即先去执行handler方法，如果设置了false，那么效果和上边例子一样
        handler(newVal, oldVal) {
          console.log('watch:firstNum')
          console.log('oldVal:', oldVal)
          console.log('newVal:', newVal)
        },
        // 立即处理 进入页面就触发
        immediate: true
      },

    // 3.deep属性（深度监听，常用语对象下面属性的改变
    //   我们在在输入框中输入数据视图改变obj.a的值时，我们发现是无效的。受现代 JavaScript 的限制 (以及废弃 Object.observe)，Vue 不能检测到对象属性的添加或删除。由于 Vue 会在初始化实例时对属性执行 getter/setter 转化过程，所以属性必须在 data 对象上存在才能让 Vue 转换它，这样才能让它是响应的。
    //   默认情况下 handler 只监听obj这个属性它的引用的变化，我们只有给obj赋值的时候它才会监听到，比如我们在 mounted事件钩子函数中对obj进行重新赋值：

    obj: {
      handler(newVal, oldVal) {
         console.log('obj.a changed',this.obj.a);
      },
      immediate: true,
      deep: true
    }
    
  },

  methods: {},
}
</script>

<style type="text/css" scoped>
.watchDiv{
  width: 600px;
  margin: 0 auto;
}
</style>
