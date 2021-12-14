<template>
  <div id="app">
    <to-do-list></to-do-list>
    <test></test>
  </div>
</template>

<script>
import ToDoList from './components/toDoList' 
import test from './components/test.vue'
export default {
  name: 'App',
  components:{  //注册组件
    ToDoList,
    test
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
</style>
