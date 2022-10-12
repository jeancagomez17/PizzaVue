<script>
import Hijo from './hijo.vue';
export default{
    data() {
        return {
            num:[1,2,3,4,5]
        };
    },
    components: { Hijo }
}
</script>
<template>
    <div class="padre">
        <h1>{{$store.state.msg }}</h1>
        <h2>Componente padre: {{num}}</h2>
        <Hijo :numero="num"></Hijo>
    </div>
</template>
<style scoped>
    .padre{
        padding: 15px;
        background-color: antiquewhite;
    }
</style>