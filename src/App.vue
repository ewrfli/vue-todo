<template>
  <div id="app">
    <router-link to="/">to/ hello-father</router-link>
    <router-link to="/child">to child</router-link> <br>

    <router-link to="/test01">to test01</router-link> 
    <router-link to="/toDoList">to toDoList</router-link> <br>
    
    <router-link to="/mixinDetails">to mixinDetails</router-link>
    <router-link to="/sfatherComponent">to sfatherComponent</router-link> <br>

    <router-link to="/busA">to busA</router-link>
    <router-link to="/busB">to busB</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components:{  //注册 引用

  },
  mixins:[],
  data() {
    return {

    }
  },
  watch: {

  },
  methods: {

  }

}
</script>

<style>

</style>
