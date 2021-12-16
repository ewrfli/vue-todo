// busB.vue
<template>
    <div>
        <h1>busB.vue</h1>
        <div>{{msg}}</div>
    </div>
</template>

<script>
    import {eventBus} from "../utils/eventBus";

    export default {
        name: "busB",
        data() {
            return {
                msg: 'initialValue'
            }
        },
        created() {
            eventBus.$on('aMsg', mm => {
                this.msg = mm;
                console.log('busBconsole:',mm)
            })
        }
    }
</script>