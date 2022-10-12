<script>
import Listas from "./components/curso/listas.vue";
import Profesor from "./components/curso/profesor.vue";
import Contacto from "./components/curso/contacto.vue";
import Menu1 from "./layouts/menu.vue";




export default{
  el:".header",
  data(){
    return {
      componentNew:null, 
      prodiedad: '',
      
    }
  }, 
  components:{
    Listas,
    Profesor,
    Contacto,
    Menu1,
}
}
  

</script>

<template>
<menu1/>

<router-view>  

</router-view>
</template>

<style scoped>


</style>
