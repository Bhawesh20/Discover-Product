<template>
  <div>
    <el-container v-if="dataReady">
      <el-aside width="200px">
        <filterView :products="products" @brand-filter="brandFilterMethod" @category-filter="categoryFilterMethod"></filterView>
      </el-aside>
      <el-main>

        <el-row>
        <el-col :body-style="{ padding: '10px'}" :span="6" v-for="(o, index) in (filteredProducts.length)">
            <product :product="filteredProducts[index]"></product>
          </el-col>
        </el-row>
        
      </el-main>
    </el-container>
  </div>
</template>

<script>
import axios from "axios";
import filterView from "./Filter.vue";
import product from "./Product.vue";
export default {
  created() {},
  components: { product, filterView },
  data() {
    return {
      message: "Hello",
      dataReady: false,
      data1: {},
      products: [],
      brandFilter: [],
      categoryFilter: []
    };
  },
  mounted() {
    axios
      .get("https://demo7242716.mockable.io/products")
      .then(
        (response) => (
          (
            this.products = response.data.products,
            this.dataReady = true
            )
        )
      );
  },
  computed:{
    filteredProducts(){
      var filtered = this.products;
      if(this.brandFilter.length>0){
        filtered = filtered.filter(product => {
          return this.brandFilter.includes(product.brand);
        })
      }
      if(this.categoryFilter.length>0){
        filtered = filtered.filter(product => {
          return this.categoryFilter.includes(product.category);
        })
      } 
      return filtered;
    }
  },
  methods: {
    brandFilterMethod(value){
      this.brandFilter = value;
    },
    categoryFilterMethod(value){
      this.categoryFilter = value;
    },
    
  }
};
</script>
<style></style>
