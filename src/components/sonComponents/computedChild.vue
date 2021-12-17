<template>
  <div class="computedChild">
    <div>computedChild: {{user}}</div>
    <div>修改前：{{oldUser}} 修改后：{{user}}</div> <br>
    
  </div>
</template>

<script>
export default {
  name: 'computedChild',
  props: ['user'],
  data () {
    return {
      oldUser: {}
    }
  },
 // 缓存 userInfo   
  computed: {
    userInfo () {
      return { ...this.user } //来创建新的引用
    }
  },
  watch: {
    userInfo: {
      handler (val, oldVal) {
        this.oldUser = oldVal || val
      },
      deep: true,
      immediate: true
    }
  },
  methods: {},
}
</script>

<style type="text/css" scoped>
.computedChild{
  width: 450px;
  margin: 0 auto;
  border: pink solid 1px;
}
</style>
