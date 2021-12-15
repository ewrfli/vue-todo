<template>
  <div id="app">
    <router-link to="/">to/</router-link>
    <router-link to="/test01">totest01</router-link>
    <router-link to="/toDoList">totoDoList</router-link>
    <router-link to="/child">tochild</router-link>
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
