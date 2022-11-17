 import './bootstrap';

import Alpine from 'alpinejs';
import {createApp, Vue} from "vue";
import Postindex from "./components/Postindex.vue";
import Posttest from "./components/TestComponent.vue";



window.Alpine = Alpine;
Alpine.start();

createApp({
    components:{
        Postindex,
        Posttest,
        


    }
})
.mount('#app');
