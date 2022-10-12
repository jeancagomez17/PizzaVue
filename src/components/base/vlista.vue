<script>
    export default {
        props:{
            lista:Array
        }
    }
</script>

<template>
     <ul class="lists">
        <li  class="list-item" v-for="(item) in lista" :key="item.id"> {{ item.name }} </li>
    </ul>
</template>

<style scoped>
</style>