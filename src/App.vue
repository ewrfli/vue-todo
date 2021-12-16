<template>
  <div id="app">
    <router-link to="/">to/</router-link>
    <router-link to="/test01">to test01</router-link>
    <router-link to="/toDoList">to toDoList</router-link>
    <router-link to="/child">to child</router-link>
    <router-link to="/mixinDetails">to mixinDetails</router-link>
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
