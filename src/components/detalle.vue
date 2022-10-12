<script>
import {data} from './card.vue'
import Count from './count.vue'
const arrDetail = [{
            id:1, title:"Pizza Peperoni It", price:14500, img:"jsjs", desc:"It is a pizza based on tomato sauce, mozzarella and pepperoni, a type of cured salami made from pork and beef mixed together and seasoned with paprika. In this recipe I tell you how to make a delicious pepperoni pizza."
        }]
export default{
    data() {
        return {
            id: this.$route.query.id,
            data: data,
            detail: arrDetail,
            arr: [], 
            count:1
        };
    },
    methods: {
        search() {
            this.arr = this.data.filter((value) => {
                return value.id == this.$route.query.id;
            });
            return this.arr;
        },
        addPro(x) {
            console.log(this.count)
            const exist = this.$store.state.carrito.some(item => item.id === x);
            console.log(exist);
            if (!exist) {
                const dataOne = { ...data[x - 1], contador:this.data.count };
                this.$store.commit("addCarrito", {
                    product: dataOne
                });
            }
            else {
                return alert("Ya se agrego el producto");
            }
        },
        updateQuantiy(value){
        console.log(value)
        this.data.count = Number(value);
      }
    },
    beforeMount() {
        this.search();
    },
    components: { Count }
}
</script>
<template>
    <div class="container">
        <div class="detail" v-for="(item, index) of arr">
            <div class="detail-header" >
                <img src="https://cdn.pixabay.com/photo/2012/04/13/10/52/pizza-31799_960_720.png" alt="" class="hover" />
                <h1>
                    {{item.title}}
                </h1>
                
        
            </div>
            <div class="detail-body">
                <div class="text">
                    <p>
                        {{ item.desc }}
                    </p>
                </div>
                <div class="btn">
                   <Count @quantity="updateQuantiy" :coun="count"></Count>
                    <button @click="addPro(item.id)">AGREGAR</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.container{
    width: 70%;
    margin: auto;
}
.detail{
    display: block;
    border: 1px solid #ff4701;
    color:#000;
    height: 450px;
    width: 35%;
    background-color: white;
    padding: 50px;
    border-radius: 5px;
}
.detail-header{
    padding: 10px 35px;
   text-align: center;
    
}
.detail-header img{
    width: 75px;
    height: 55px;
    background-size: cover ;
}
.detail-header h4{
    margin-left: 25% ;
}
.detail-header h1{
    
    font-weight: bold;
    font-size: 19pt;
    /* color:#ff4701; */
}
.detail-body{
    width: 85%;
    line-height:20pt;
    margin: auto;
    text-align: center;
}
.detail-body .text{
    padding: 20px;
    
    color:gray;
}
.detail-body .btn button{
    background: none;
    border: #ff4701 solid 2px;
    padding: 5px 20px;
    border-radius: 15px;
    cursor: pointer;
    color: gray;
    font-weight: bold;
}
.btn button:hover{
    color:rgb(255, 255, 255);
    border-color: white;
    background-color: #ff4701;
    transition: all 0.5s ease-in-out;
}
</style>