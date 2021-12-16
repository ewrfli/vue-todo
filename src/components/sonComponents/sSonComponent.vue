 <template>
  <div class="sSonComponent">
    <div>sSonComponent:</div>
    <slot name="header"></slot>
    <slot></slot>
    <slot name="zdyi"></slot>
    <slot name="footer"></slot>
  </div>
</template>
 <script>
export default {
  name: 'sSonComponent',
  data() {
    return {
      user: [
        { name: 'Jack', sex: 'boy' },
        { name: 'Jone', sex: 'girl' },
        { name: 'Tom', sex: 'boy' }
      ]
    }
  }
}
    </script>
<style>
.sSonComponent {
  margin: 0 auto;
  width: 300px;
  height: 200px;
  border: pink solid 1px;
}
</style>