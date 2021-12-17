<template>
  <div>
     <p v-for="(value,key) in message" :key="key">
      {{ value }}
    </p>
    <button @click="addProperty">添加新属性</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message:[
        {id: 1, name: '1'},
        {id: 2, name: '2'}
      ],
    }
  },
  methods: {
    addProperty(){
        this.$set(this.message, 2, {id: 3, name: '3'})
        console.log(this.message) 

        console.log(this.$el.textContent) // '未更新'
        
        this.$nextTick(() => { //当数据更新了，在dom中渲染后，自动执行该函数，
            console.log(this.$el.textContent) // '已更新'
        })
    },
  },
}
</script>

<style type="text/css" scoped>
</style>
