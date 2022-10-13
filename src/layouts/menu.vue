<script>
import Modal from '../components/modal.vue';
import store from "../store";

export default {
    data() {
        return {
            componentNew: null,
            prodiedad: "",
            active: false,
            showMenu:false,
        };
    },
    methods: {
        mostrar(component, prop) {
            this.componentNew = component;
            this.prodiedad = prop;
        }, 
        mostrarCarrito(){
            if(this.showMenu){
                return this.showMenu = false
            } else return this.showMenu = true;
        }
    },
    computed:{
      carrito(){
        return this.$store.state.carrito.length
      }, 
      showModal(){
        if(this.carrito == 0) return this.showMenu = false
      }
    },
    
    components: { Modal }
}
</script>
<template>
    <div class="header">
        <img src="https://cdn.pixabay.com/photo/2014/04/02/14/12/pizza-306495_960_720.png" alt="" class="hover" />
        <ul class="header-list" id="ejemplo" ref="ejemplo">
            <li><router-link class="hover" :to="{name:'home'}" >HOME</router-link></li>
            <li><router-link class="hover" :to="{name:'cards'}" >MENU</router-link></li>
            <li><router-link class="hover" :to="{name:'detail', query:{id:5}}">PROMOS</router-link></li>
            <li><router-link class="hover" to="/" >ORDERS</router-link></li>
            <li><router-link class="hover" to="/" >ABOUT</router-link></li>
            <li><a class="hover" @click="mostrarCarrito" >CARRITO {{carrito}} </a> </li>
           
        </ul>
    </div>
    
    <modal :show="showMenu"></modal>
    
</template>
    
<style scoped>
.header {
    padding: 20px 100px 20px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    background: linear-gradient(black, transparent);
    
}
.header-list{
    margin-right: 10px;
    
}

.header ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    
}

.header ul li {
    padding: 1em;
}

.header ul li a {
    padding: 10px;
    text-decoration: none;
    border-radius: 5px;
    color: white;
    
}
.header ul li sup{
    padding: 10px;
    font-size: 15pt;
}

.hover:hover {
    color:white;
    background-color: #ff4701;
    transition: all ease-in-out .4s;
}

.header img {
    background-color: beige;
    width: 75px;
    height: 75px;
    border-radius: 50px;
    border: solid 2px beige;
}

@media screen and (max-width:767px) {
    .header {
        height: 40px;
    }

    .header ul li {
        padding: 2px;
    }

    .header ul li a {
        padding: 5px;
        font-size: 10pt;
    }

    .header img {
        width: 45px;
        height: 45px;
    }
}
</style>