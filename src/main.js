import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);

// var data = window.data;

new Vue({
    el:'#app',
    data:{
        message: "Hello world"
    },
    render:h =>h(App)
  })