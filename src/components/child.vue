<template>
  <div>
    <div class="test" @click="childMethod3()">child div</div>
    <div class="test" @click="childChangeFatherData">{{fatherData}}点击改变父组件data</div>
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
    return {}
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
        if (this.fatherMethod) {
          this.fatherMethod();
        }
    },
    childChangeFatherData() {
      console.log('childChangeFatherData')
      this.$emit('sonChangeFaDataEvent','son改变后的data')//(自定义事件名, 修改后参数)
    }
  },
}
</script>

<style type="text/css" scoped>
  .test{
    margin: 0 auto;
    width: 80px;
    border: skyblue solid 1px;
    color: skyblue;
  }
</style>
