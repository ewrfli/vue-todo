<template>
  <div>
    <p v-for="(value,key) in item" :key="key">
      {{ value }}
    </p>
    <button @click="addProperty">动态添加新属性</button>

  <ul>
		<li v-for="(item, index) in tempList" :key="index">{{item}}</li>
	</ul>
	<button @click="addList">addList</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      item:{
          oldProperty:"旧属性"
      },
      tempList: [
        {id: 1, name: '1'},
        {id: 2, name: '2'}
      ]
    }
  },
  methods: {
    addProperty(){
        
        this.item.newProperty = "新属性"  // 为items添加新属性
        console.log(this.item)  // 输出带有newProperty的item 可以打印出 页面上没有
    },
    addList () {  
        //(obj, key, val)
        // Vue.set(this.tempList, 0, {id: 3, name: '3'})
         this.$set(this.tempList, 2, {id: 3, name: '3'})
        // 如果是在组件中使用，就不能直接使用Vue实例来调用，但是可以使用this
    }
  },
}
</script>

<style type="text/css" scoped>
</style>
