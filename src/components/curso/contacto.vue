<script>
    export default{
        props:{
            titulo:String
        }
    }
</script>
<template>
<div class="contacto">
    <h3 class="contacto-title">{{ titulo }}</h3>
    <input type="text" placeholder="Email" class="text-email">
    <input type="text" placeholder="Mensaje" class="text-mens">
</div>
</template>
<style scoped>

    .contacto{
        display: block;
    }
    .contacto .contacto-title{
        font-size: 20px;
        color:black;
    }

</style>