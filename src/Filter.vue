<template>
    <div>
        <div>
            <h4> Brand </h4>
            <el-checkbox-group class="checkboxGroup" v-model="checkedBrands" @change="handleCheckedBrand">
                <el-checkbox class="checkbox" v-for="brand in brands" :label="brand" :key="brand"> {{brand}} </el-checkbox>
            </el-checkbox-group>
        </div>
        {{checkedBrands}}
        <div>
            <h4> Category </h4>
            <el-checkbox-group class="checkboxGroup" v-model="checkedCategories" @change="handleCheckedCategory">
                <el-checkbox class="checkbox" v-for="category in categories" :label="category" :key="category"> {{category}} </el-checkbox>
            </el-checkbox-group>
        </div>
    </div>
</template>
<script>
export default{
    props:{
        products:{
            type: Array,
            default: []
        }
    },
    data(){
        return{
            brands: [],
            categories: [],
            checkedBrands: [],
            checkedCategories: [],
            radio: 3
        }
    },
    created(){
        var brands = [];
        var categories = [];
        for(var i = 0; i< this.products.length; i++){
            var product = this.products[i];
            if(!brands.includes(product.brand)){
                brands.push(product.brand);
            }
            if(!categories.includes(product.category)){
                categories.push(product.category);
            }
        }
        this.brands = brands;
        this.categories = categories;
    },
    methods: {
        handleCheckedBrand(values){
            this.$emit('brand-filter', values);
            
        },
        handleCheckedCategory(values){
            this.$emit('category-filter', values);
        }
    }
}
</script>
<style>
.checkbox{
    display: block !important;
}
.checkboxGroup {
    height: 300px;
    overflow: scroll;
}
</style>