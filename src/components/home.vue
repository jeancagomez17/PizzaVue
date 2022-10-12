<script>
import store from "../store";
import Padre from "./padre.vue";

export default{
    data() {
        return {
            ejemplo: store.state.carrito
        };
    }, methods:{
        increment(){
            this.$store.commit('increment')
            console.log(store.state.count)
        },
        add(product){
            store.commit('addCarrito', {
                product
            })
        }
    },
    components: { Padre }
}
</script>

<template>
    <div class="container">
        <div class="home">
            <div class="title">
                <h3>Encuentra lo mejor de la pizza Italiana</h3>
                <h1>Pizzeria Rome </h1>
                
                <button @click="add('test')"> VIEW MENU</button>
            </div>
            
        </div>
        
    </div>

</template>
<style scoped>
.container{
    width: 100%;
    height: auto;
    

}
.home{
    width: 50%;
    /* background-color: white; */
    color:white;
    height: auto;
    padding: 15px;
    margin:10px 80px ;
    
}
.title{
    margin: 20px;
    padding: 10px;
    line-height: 85px;
}
.title h1{
    font-size: 50pt;
}
.title button{
    width: 180px;
    border:none;
	border-radius:25px;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:13px;
    font-weight:bold;
	padding:10px 24px;
	text-decoration:none;
    margin-left: calc(20% - 10px);
    background-color:#ff4701;
    box-shadow:inset 0px 1px 0px 0px #cf866c;
	background:linear-gradient(to bottom, #ff4701 5%, #bc3315 100%);
    text-shadow:0px 1px 0px #854629;
}

</style>