require('./bootstrap');


import {createApp}  from 'vue';
import Master from './Master.vue';
import router from './router.js';
import store from './store/index'
import VueFeather from 'vue-feather';
// import 'alga-css/dist/alga-animate.min.css'
import 'alga-css/dist/alga.min.css'

const app = createApp(Master);
app.use(router);
app.use(store);
app.component(VueFeather.name, VueFeather);
app.mount('#app');
