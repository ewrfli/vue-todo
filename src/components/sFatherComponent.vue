<template>
  <div class="sFatherComponent">
    我是父组件 
    <sSonComponent>
      <!-- <p style="color:red">我是父组件里的插槽内容</p> -->

      <template v-slot:header>
              <p style="color:skyblue">我是name为header的slot</p>
          </template>

          <template v-slot:default>
              <p style="color:blue">我是父组件里default的插槽内容</p>
          </template>

          <template v-slot:zdyi>
              <p style="color:#036f87">我是父组件里data里name:{{name}}</p>
          </template>
          
           <template  v-slot:footer>
              <p style="color:yellow">我是name为footer的slot</p>
          </template>

    </sSonComponent>
<!-- //作用域插槽 -->
    <sSonComponentTwo>
      <template slot-scope="user">
        <!-- {{user.data}} -->
        <ul>
          <li v-for="item in user.data" :key="item.id">{{item}}</li>
        </ul>
      </template>
    </sSonComponentTwo>      
  </div>
</template>
<script>
//插槽显不显示、怎样显示是由父组件来控制的，而插槽在哪里显示就由子组件来进行控制
//v-slot:header可以写成#header
import sSonComponent  from './sonComponents/sSonComponent.vue'
import sSonComponentTwo  from './sonComponents/sSonComponentTwo.vue'
export default {
  name: 'App',
  components:{ 
    sSonComponent,
    sSonComponentTwo
  },
  mixins:[],
  data() {
    return {
      name: 'levi'
    }
  },
  watch: {

  },
  methods: {

  }

}
</script>
<style>
.sFatherComponent{
  margin: 0 auto;
  padding: 50px;
  width: 600px;
  height: 300px;
  border: red solid 1px;
}
</style>