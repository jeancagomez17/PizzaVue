<script>

export default {
    data(){
        return{
            num: this.coun,
            
        }
    }, methods:{
        max(){
            this.num++
            this.$emit('quantity', this.num)
        }, min(){
            this.$emit('quantity', this.num)
            
            if(this.num <= 1){
                this.num= 1
            }else {
                this.num--
            }
        }
    }, props:{
        coun:Number
    }, beforeMount(){
      
    }
}

</script>


<template>
    <div class="container">
        <button @click="min">-</button>
        {{ num }}
        <button @click="max">+</button>
    </div>
</template>
<style scoped>
</style>