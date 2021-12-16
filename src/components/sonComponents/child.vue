<template>
  <div class="childDiv">
    childComponent
    <div class="test" @click="childMethod3()">childMethod</div>
    <div class="test" @click="childChangeFatherData">
      {{fatherData}}  <br>
      <button>点击改变父组件data</button>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    fatherMethod: {
      type: Function,
      default: null
    },
    fatherData: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      msg: 'msg from child'
    }
  },
  methods: {
    //1. $emit
    childMethod() {
      console.log('childMethod')
      this.$emit('fatherMethod');
      his.$emit('onClickA');
    },
    //2. this.$parent
    childMethod2() {
      console.log('childMethod2')
      this.$parent.fatherMethod();
      this.$parent.onClickA();
    },
    //
    childMethod3() {
        console.log('childMethod3: this.$parent',this.$parent)
        // 获取指定父组件中的指定数据
        console.log('获取指定父组件中的指定数据:',this.$parent.fatherData)
        // 调用父组件的方法
        this.$parent.fatherMethod()

        if (this.fatherMethod) {
          this.fatherMethod();
        }
    },
    childChangeFatherData() {
      console.log('childChangeFatherData')
      this.$emit('sonChangeFaDataEvent','son改变后的data')//(自定义事件名, 修改后参数)
    },
    fun () {
      console.log('child fun')
    }

  },
}
</script>

<style type="text/css" scoped>
  .childDiv{
    margin: 0 auto;
    width: 250px;
    height: 100px;
    border: blue solid 1px;
  }
  .test{
    margin: 0 auto;
    width: 220px;
    border: skyblue solid 1px;
    color: skyblue;
  }
</style>
