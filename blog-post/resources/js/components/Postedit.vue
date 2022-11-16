<template> 

<form class="space-y-6" @submit.prevent="savePost">
    <div>
        <label for="name">Title Post</label>
        <input type="text" class="block" id="title" v-model="post.title">
    </div>
    <div>
        <label for="name">Description Post</label>
        <input type="text" class="block" id="text" v-model="post.text">
    </div>
    <button type="submit"  class="bg-green-500 px-2 py-1 text-white rounded">Apdate Post</button>
</form>
    
</template>

<script>
import {  onMounted, reactive } from 'vue';
import router from '../router';
import usePosts from '../services/postservices.js';


export default{
    props: {
        id: {
            required :true,
            type :String
        }
    },
    setup(props){
        const { getPost,post,updatePost} = usePosts();
        onMounted(getPost(props.id));

        const savePost = async()=>{
            await updatePost(props.id);
            await router.push({name:'posts.index'});
           
        };
        return {
            post,
            savePost
            
            

        }
    }
    
    
}

</script>