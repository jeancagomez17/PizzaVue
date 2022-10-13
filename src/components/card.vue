<script>
import axios from 'axios'
import Count from './count.vue'

export const data = [
  { id: 1, title: "Pizza Peperoni", price: 1500, img: "https://cdn.pixabay.com/photo/2017/01/03/11/33/pizza-1949183_960_720.jpg", desc:"Pizza Delicosa blabla bla bla bla", count:0 },
  { id: 2, title: "Pizza Queso", price: 1500, img: "https://cdn.pixabay.com/photo/2017/01/03/11/33/pizza-1949183_960_720.jpg", desc:"Pizza Delicosa blabla bla bla bla", count:0 },
  { id: 3, title: "Pizza Carnes", price: 1500, img: "https://cdn.pixabay.com/photo/2017/01/03/11/33/pizza-1949183_960_720.jpg",desc:"Pizza Delicosa blabla bla bla bla", count:0 },
  { id: 4, title: "Pizza Pollo", price: 1500, img: "https://cdn.pixabay.com/photo/2017/01/03/11/33/pizza-1949183_960_720.jpg", desc:"Pizza Delicosa blabla bla bla bla", count:0 },
  { id: 5, title: "Pizza Mexicana", price: 1500, img: "https://cdn.pixabay.com/photo/2017/01/03/11/33/pizza-1949183_960_720.jpg" , desc:"Pizza Delicosa blabla bla bla bla", count:0 },
  { id: 6, title: "Pizza Mexicana", price: 1500, img: "https://cdn.pixabay.com/photo/2017/01/03/11/33/pizza-1949183_960_720.jpg", desc:"Pizza Delicosa blabla bla bla bla", count:0 },


]
export default {
    data() {
        return {
            info: null,
            arr: [],
            datos: data,
            count: 1
        };
    },
    created() {
        if (localStorage.getItem("carrito") != null) {
            this.arr = JSON.parse(localStorage.getItem("carrito"));
        }
    },
    mounted() {
       
    },
    methods: {
      updateQuantiy(value){
        this.datos.count = Number(value);
      },
        ruta(id) {
            return this.$router.push({ name: "detail", query: { id: id } });
        },
       
        addPro(x){
          
          const exist = this.$store.state.carrito.some(item => item.id === x);
          if(!exist){
            
            const dataOne = {...data[x - 1], contador: 1 ? this.datos.count : 1} 
                this.$store.commit('addCarrito', {
                product:dataOne
            })
            return alert('Product ok')
          } else return alert('Ya se agrego el producto')   
        },
       
      
    },
    components: { Count }
}
</script>
<template>
  
  <div class="container-cards">
    <div class="card" v-for="(item, index) in datos" :key="item.id">
      <img v-bind:src="item.img" alt="">
      <div class="content">
        <div class="text">
          <h4>{{item.title}}</h4>
          <h4>Price: {{item.price}}</h4>
        </div>
        <div class="price">
         <count @quantity="updateQuantiy" :coun="count"></count>
          <button @click="ruta(item.id)" class="btn2"> Detalle </button>
          <button @click="addPro(item.id)" class="btn1"> Agregar </button>
        </div>
      </div>
    </div>
  </div>
   
</template>
<style scoped>
.container-cards {
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  margin: auto;
  text-align: center;
  width: 80%;
}

.card {
  width: 300px;
  height: 300px;
  background: #fff;
  overflow: hidden;
  display: inline-block;
  margin: 20px;
  border-radius: 10px;
  text-align: center;
 
}

.card:hover {
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  transition: all ease-in-out .4s;
}

.card img {
  width: 80%;
  height:50%;
  box-sizing: content-box;

}

.card .content {
  width: 80%;
  margin: auto;
  text-align: center;
}
.content .text {
  display: flex;
  justify-content: space-between;
}
.price button{
  border:none;
	border-radius:3px;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:13px;
  font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
  margin: 2px 5px;
}
.btn1 {
  background-color:#ff4701;
  /* border:1px solid #942911; */
  box-shadow:inset 0px 1px 0px 0px #cf866c;
	background:linear-gradient(to bottom, #ff4701 5%, #bc3315 100%);
  text-shadow:0px 1px 0px #854629;
}
.btn2{
  box-shadow: 0px 10px 14px -7px #276873;
	background:linear-gradient(to bottom, #1d4851 5%, #408c99 100%);
	background-color:#1d4851;
  cursor:pointer;
	color:#ffffff;
  border:none;
	text-shadow:0px 1px 0px 1d4851;
  font-family:Arial;
	font-size:13px;
  font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
  margin: 2px 5px;
}

.btn1:hover{
  background:linear-gradient(to bottom, #bc3315 5%, #d0451b 100%);
	background-color:#ff4701;
}
.btn2:hover{
  background:linear-gradient(to bottom, #408c99 5%, #599bb3 100%);
	background-color:#408c99;
}
.modal{
  background-color: #CCC;
  width: 500px;
  height: 500px;
  text-align: center;
  margin: auto;
}
.modal .modal-header{
  display: flex;
  justify-content: space-between;
  background-color: #9ab5bc;
  padding: 10px 20px;
}
.btnModal{
  width:25px;
  height: 25px;
  cursor:pointer;
  border:none;
  color:white;
}
.table-order{
  width: 100%;
}
.table-order thead tr {
    background-color: #1d4851;
    left: 0;
    position: sticky;
    z-index: 9999;
    color:white;
    text-align: left;
}

.new{
  padding: 10px;
  margin: auto;
  width: 85%;
  display: flex;
  justify-content:center;
  align-items: center;
  
}
.new button{
  width: 20px;
  height: 20px;
  
}
@supports(object-fit: cover) {
  .box img {
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
}

@media screen and (min-width:1024px) {}

@media screen and (min-width:767px) and (max-width:1023px) {}
</style>