<script>
export default{
    data(){
        return{
            ejemplo:[]
        }
    },
    props:{
        numero: Array
    },
    methods:{
       sum(){
            this.numero.forEach((item)=>{
                this.ejemplo.push(item)
            })
            
        }
    }, beforeMount(){
        this.sum()
    }
}
</script>
<template>
    <div class="hijo">
        <button @click="sum">Ejecutar</button>
        <h2>Componente hijo {{ ejemplo }}</h2>
    </div>

</template>
<style scoped>
    .hijo{
        width: 80%;
        padding: 10px;
        background-color: blanchedalmond;
    }
</style>