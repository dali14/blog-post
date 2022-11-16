import {createRouter ,createWebHistory} from "vue-router";
import Postindex from "../components/Postindex.vue";
import Postadd from "../components/Postadd.vue";

const routes =[
    {
        path: '/dashboard',
        name: 'posts.index',
        component: Postindex
    },
    {
        path: '/post/add',
        name: 'posts.add',
        component: Postadd
    }
];



export default createRouter({
    history : createWebHistory(),
    routes
});