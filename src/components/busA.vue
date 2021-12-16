// busA.vue
<template>
    <div>
      <h1>busA.vue</h1>
      <div>
        <button @click="btn">btn</button>
      </div>
    </div>
</template>

<script>
    import {eventBus} from "../utils/eventBus";

    export default {
        name: "busA",
        methods: {
            btn() {
                eventBus.$emit('aMsg', '我来自busA')
            }
        },
    }
</script>