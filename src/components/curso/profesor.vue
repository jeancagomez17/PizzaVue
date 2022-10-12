<script>
import Vlista from '../base/vlista.vue';

    export default{
    data() {
        return {
            profesor: [
                { id: 0, name: "Sonia" },
                { id: 1, name: "Pepe Grillo" },
                { id: 2, name: "Alfonso Davies" }
            ]
        };
    },
    components: { Vlista }
}

</script>
<template>
<div class="profesores">
   <Vlista :lista="profesor"/>
</div>

</template>
<style scoped>

</style>