import axios from "axios";
import { ref } from "vue";

export default function usePosts(){
    const posts = ref([]);

    const getPosts = async() =>{
        let response = await axios.get('api/posts');
        posts.value = response.data.data;
    };

    const createPost = async(data) =>{
        await axios.post('/api/posts',data);
        
    };

    return{
        posts,
        getPosts,
        createPost

    };
}