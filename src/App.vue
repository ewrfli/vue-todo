<template>
  <div id="app">
    <keep-alive>
      <router-link to="/">to/ hello-father</router-link>
      <router-link to="/child">to child</router-link> <br>
    </keep-alive>
      <router-link to="/test01">to test01</router-link> 
      <router-link to="/toDoList">to toDoList</router-link> <br>
      
      <router-link to="/mixinDetails">to mixinDetails</router-link>
      <router-link to="/sfatherComponent">to sfatherComponent</router-link> <br>

      <router-link to="/busA">to busA</router-link>
      <router-link to="/busB">to busB</router-link>  <br>

      <router-link to="/watch">to watch</router-link>
      <router-link to="/computed">to computed</router-link> <br>

      <router-link to="/vueSet">to vueSet</router-link>
      <router-link to="/nextTick">to nextTick</router-link>
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
#app{
  text-align: center;
}

</style>
