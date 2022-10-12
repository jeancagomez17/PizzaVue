<script>
import Vlista from '../base/vlista.vue';

    export default{
    data() {
        return {
            lista: [
                { id: 0, name: "Javascript" },
                { id: 1, name: "Php" },
                { id: 2, name: "Python" }
            ]
        };
    },
    components: { Vlista }
}

</script>
<template>
<div class="listas">
   <Vlista :lista="lista"></Vlista>
</div>

</template>
<style scoped></style>