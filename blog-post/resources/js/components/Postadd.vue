<template> 

<form class="space-y-6" @submit.prevent="storePost">
    <div>
        <label for="name">Title Post</label>
        <input type="text" class="block" id="title" v-model="form.title">
    </div>
    <div>
        <label for="name">Description Post</label>
        <input type="text" class="block" id="text" v-model="form.text">
    </div>
    <button type="submit"  class="bg-green-500 px-2 py-1 text-white rounded">ADD Post</button>
</form>
    
</template>

<script>
import {  reactive } from 'vue';
import router from '../router';
import usePosts from '../services/postservices.js';


export default{
    setup(){
        const form = reactive({
            title:'',
            text:''
        });
        const { createPost} = usePosts();
        const storePost = async() =>{
            await createPost({...form});
            await router.push({name:'posts.index'});
            

        };
        return {
            form,
            storePost

        }
    }
    
    
}

</script>