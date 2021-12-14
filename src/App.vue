<template>
  <div id="app">
    <to-do-list></to-do-list>
    <child  
      @fatherMethod="fatherMethod" 
      @onClickA="onClickA" 
      :fatherMethod="fatherMethod"
      :fatherData="fatherData"
      v-on:sonChangeFaDataEvent = "zidiyi($event)"
    >
    </child>
    
    <div class="divcss">
      <span @click="fatherMethod">fatherMethodDiv</span>
      <div class="acss" :style="aStyle" ref="aRef" @click="onClickA">
        a
      </div>
      <div class="bcss">
        b
      </div>
    </div>
    <div>this.$data this.$emit this.$parent props :style ref 自定义事件名</div>
  </div>
</template>

<script>
import ToDoList from './components/toDoList' 
import child  from './components/child .vue'//导入
export default {
  name: 'App',
  components:{  //注册 引用
    ToDoList,
    child
  },
  mixins:[],
  data() {
    return {
      fatherData: 'this fatherData',
      aStyle: {
        fontWeight: 'bold',
        backgroundColor: 'blue'
      },

    }
  },
  watch: {

  },
  methods: {
    fatherMethod() {
      console.log('fatherMethod')
      this.$data.aStyle.fontWeight == 'bold' ? this.$data.aStyle.fontWeight = 'normal' : this.$data.aStyle.fontWeight = 'bold'
    },
    onClickA () {
      console.log('onClickA',this.$refs.aRef)
      console.log(this.$data.aStyle.fontWeight)
      this.$data.aStyle.fontWeight == 'bold' ? this.$data.aStyle.fontWeight = 'normal' : this.$data.aStyle.fontWeight = 'bold'
      this.$data.aStyle.backgroundColor == 'blue' ? this.$data.aStyle.backgroundColor = 'skyblue' : this.$data.aStyle.backgroundColor = 'blue'
    },

    zidiyi(msg){
      console.log('child传过来：', msg);  
      this.fatherData = msg;
    }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.divcss{
  margin: 0 auto;
  width: 180px;
  height: 60px;
  background: skyblue;
  overflow: hidden;
}
.acss{
  float: left;
  width: 50%;
  height: 30px;
  line-height: 30px;
}
.bcss{
  float: left;
  width: 50%;
  height: 30px;
  line-height: 30px;
}
</style>
