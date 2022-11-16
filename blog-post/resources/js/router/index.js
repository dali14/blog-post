import {createRouter ,createWebHistory} from "vue-router";
import Postindex from "../components/Postindex.vue";
import Postadd from "../components/Postadd.vue";
import Postedit from "../components/Postedit.vue";

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
    },
    {
        path: '/post/:id/edit',
        props :true,
        name: 'posts.edit',
        component: Postedit
    }
];



export default createRouter({
    history : createWebHistory(),
    routes
});