import { createStore } from 'vuex'

const store = createStore({
    state:{
        count:0, 
        carrito:[],
    },
    mutations:{
        increment(state){
            state.count++;
        }, 
        addCarrito(state, payload){
            state.carrito.push(payload?.product)
            localStorage.setItem("carrito", JSON.stringify(state.carrito));
            
        }, 
        deleteItem(state, payload){
            state.carrito = state.carrito.filter((product) => !(product.id == payload?.product));
            localStorage.setItem("carrito", JSON.stringify(state.carrito));
        }
       
    }, actions:{

    }, getters:{

    }
})

export default store