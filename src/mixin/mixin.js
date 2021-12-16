export const minxin = {
  data () {
    return {
      message: 'minxin中message',
      age: 22
    }
    //a: 如果minxin混入的参数相同 并且是基本数据类型的 话直接使用组件内部的替换
    //b: 如果minxin混入的参数相同 并且参数是对象的话 进行合并 重复的用组件内部的
    //c: 值为对象的选项，如methods,components等，选项会被合并，键冲突的组件会覆盖混入对象的
    //可以发现当同一个mixin混入不同组件之后 就算参数被其中一个修改了，别的组件也不会修改
    //也就是可以定义共用的变量，在每个组件中使用，引入组件中之后，各个变量是相互独立的
    //值的修改在组件中不会相互影响。
  },
  created () {
    this.gobeach()
  },
  methods: {
    gobeach () {
      console.log('minxin中方法gobeach')
    }
  }
}
