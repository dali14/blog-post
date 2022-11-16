import {createRouter ,createWebHistory} from "vue-router";
import Postindex from "../components/Postindex.vue";

const routes =[
    {
        path: '/dashboard',
        name: 'posts.index',
        component: Postindex
    }
];

export default createRouter({
    history : createWebHistory(),
    routes
});