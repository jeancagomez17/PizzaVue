<script>

 import store from '../store';
import {data} from './card.vue'
export default {

  data(){
    return{
      datos: data,
    }
  },
  computed: {
    
    myValue() { 
      return this.$store.state.carrito
    
    }
},
  methods:{
    deleteId(id){
      this.$store.commit('deleteItem', {
                product:id
            })
    }
  },
  props:{
    show:Boolean
  },
  created() {
    if (localStorage.getItem("carrito") != null) {
      store.state.carrito = JSON.parse(localStorage.getItem("carrito"));
    }
  },
  mounted(){

  }
}
</script>
<template>
  <div class="modal" v-if="show">
    <div class="modal-header">
      <h1>My Order</h1>
    </div>
    <div class="modal-boody" >
      <div class="new">
        <table class="table-order">
      <thead>
        <tr>
          <td>Product</td>
          <td>Cantidad</td>
          <td>Price</td>
          <td>Delete</td>
        </tr>
    </thead>
    <tbody>
          <tr v-for="(item, index) in myValue" :key="item.id">
            <td>{{item.title}}</td>
            <td>{{item.contador}}</td>
            <td>{{item.price}}</td>
            <td><button class="btnModal btn1" @click="deleteId(item.id)">x</button></td>
          </tr>
    </tbody>
</table>

      </div>
    </div>
    <div class="modal-footer">
      <button class="btn2" v-if="myValue.length > 0">Crear Orden</button>
    </div>
  </div>
</template>

<style scoped>
.modal{
  position:fixed;
  background-color: #CCC;
  width: 500px;
  height: 500px;
  text-align: center;
  word-wrap: break-word;
  right: 0;
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
.btn1 {
  background-color:#ff4701;
  /* border:1px solid #942911; */
  box-shadow:inset 0px 1px 0px 0px #cf866c;
	background:linear-gradient(to bottom, #ff4701 5%, #bc3315 100%);
  text-shadow:0px 1px 0px #854629;
}
</style>
