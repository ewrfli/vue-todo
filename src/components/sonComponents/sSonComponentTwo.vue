 <template>
  <div class="sSonComponentTwo">
    sSonComponentTwo:
    <slot :data="data"></slot>
  </div>
</template>
<script>
export default {
  name: 'sSonComponentTwo',
  data() {
    return {
      data: ['zhangsan', 'lisi', 'wanwu']
    }
  }
}
</script>
<style>
.sSonComponentTwo {
  margin: 0 auto;
  width: 300px;
  height: 200px;
  border: skyblue solid 1px;
}
</style>