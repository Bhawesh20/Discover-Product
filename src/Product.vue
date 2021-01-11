<template>
    <div class="product">
        <el-card :body-style="{ padding: '0px', height:'400px' }">
            <carousel :images="getImages"></carousel>
            <div style="padding: 14px;">
                <div style="font-weight:700">{{product.brand}}</div>
                <div>{{product.additionalInfo}}</div>
                <div>
                    <span style="font-weight:700">Rs: {{product.price}}</span>
                    <span style="text-decoration: line-through"> {{product.mrp}}</span>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
import carousel from "./Carousel.vue";
    export default{
        created(){
            this.images = this.getImages;
        },
        props:{
            product:{
                type: Object,
                default: {
                    productName:"",
                    images:["http://assets.myntassets.com/assets/images/2466435/2018/5/21/265434b9-de22-4b2c-9ca2-ded4c01ef5801526878966488-Daniel-Klein-Women-Black-Analogue-Watch-DK11421-5-2221526878966271-1.jpg"]
                }
            }
        },
        components: { carousel },
        data(){
            return{
                images : []
            }
        },
        computed:{
            getImages(){
                return this.product.images;
            }
            
        }
    }
</script>
<style>
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
  .product {
      padding: 10px
  }
</style>