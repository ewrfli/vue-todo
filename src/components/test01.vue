<template>
  <div class="hello">
    <h1>{{ msg | msgFormat('arg1','arg2')}}</h1>
    <ul  v-for="item in list" :key="item.id">
      <li style="color: red">{{item.value | aa}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  //局部过滤器
  filters:{
    aa(ele){
      if(ele==1){
        return '一级'
      }else if(ele==2){
        return '二级'
      }else if(ele==3){
        return '三级'
      }
    },
    //element ui button样式
    tagtype(ele){
      if(ele==0){
        return 'green'
      }else if(ele==1){
        return 'blue'
      }else if(ele==2){
        return 'red'
      }
    }
  },
  name: 'HelloWorld',
  data () {
    return {
      list: [
        {
          id: 0,
          value: 2,  
        },
        {
          id: 1,
          value: 1,  
        },
        {
          id: 2,
          value: 3,  
        },
        {
          id: 3,
          value: 1,  
        },
      ],
      msg: 'vueRouter-test'
    }
  },
  methods: {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  width: 600px;
  margin: 0 auto;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
