<script>   
export default {

    data(){
        return {
            currentValue:"",
            tags: [],

        }
        
    },
    methods:{
            handleKeyDown(e){
                if(e.key === "Backspace" && this.currentValue === ''){
                    this.tags.pop()
                }
            },

            handleSubmit(){
                if(this.currentValue !== ''){
                    const exist = this.tags.some(item => item === this.currentValue);
                    if(!exist){
                        this.tags.push(this.currentValue);
                        this.currentValue = ''
                    }
                    
                }
            },

            deleteTag(tag){
                this.tags = this.tags.filter((item)=> item != tag)
            }
        }
}
</script>

<template>
    <div class="inputag">
        <div class="tags">
            <div class="tag" v-for="(tag, index) in tags" :key="index">
                {{ tag }}
                <button @click="deleteTag(tag)">X</button> 
            </div>
        </div>
        <form @submit.prevent="handleSubmit">
            <input type="text" v-model="currentValue" @keydown="handleKeyDown"/>
        </form>
        
    </div>   
</template>

<style scoped>
    .inputag{
        background-color: black;
        width: 500px;
        margin: auto;
        color:white;
        position: relative;
        text-align: center;
    }
    .tag {
        display: inline-block;
        padding: 10px;   
     }
    .tag button{
        border-radius: 2px;
        border: 1px solid white;
        color:white;
        background:black ;
    }
    

</style>