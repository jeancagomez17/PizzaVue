import { createRouter, createWebHistory } from "vue-router";
import listas from '@/components/curso/listas.vue'
import profesores from '@/components/curso/profesor.vue'
import contacto from '@/components/curso/contacto.vue'
import cards from '@/components/card.vue'
import parallax from '@/layouts/parallax.vue'
import detalle from '@/components/detalle.vue'
import home from '@/components/home.vue'
const routes = [
    {
        path:'/cursos',
        component:parallax,
        name:'cursos'
    },
    {
        path:'/profesores',
        component:profesores,
        name:'profesores'
    },
    {
        path:'/contacto',
        component:contacto,
        name:'contacto'
    },
    {
        path:'/cards',
        component:cards,
        name:'cards'
    },
    {
        path:'/',
        component:home,
        name:'home'
    }
    ,
    {
        path:'/comida/detalle',
        component:detalle,
        name:'detail'
    }

]

const router = createRouter({
    history: createWebHistory(), 
    routes
})

export default router