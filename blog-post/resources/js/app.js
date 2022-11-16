 import './bootstrap';

import Alpine from 'alpinejs';
import {createApp} from "vue";
import Postindex from "./components/Postindex.vue";
import router from "./router";

createApp({
    components:{
        Postindex
    }
})
.use(router)
.mount('#app');

window.Alpine = Alpine;
Alpine.start();
