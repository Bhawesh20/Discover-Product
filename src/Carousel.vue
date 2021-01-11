<template>
<div>
    <div @click="onclick">
        <img :src=`${img}` class="image">
    </div>
<div>
</template>
<script>
export default{
    data(){
        return{
            count: 1,
            img: {}
        }
    },
    props:{
        images:{
            type: Array,
            default: []
        }
    },
    created(){
        this.img = this.images[this.count].src;
    },
    methods:{
        onclick(){
            if(this.count<this.total-1){
                this.count++;
            } else{
                this.count = 1;
            }
            this.img = this.images[this.count].src;
        }
    },
    computed: {
        total(){
            return this.images.length;
        }
    }
}
</script>
<style>
    .image {
        display: block;
        margin-left: auto;
        margin-right: auto;
        height: 300px;
    }
</style>