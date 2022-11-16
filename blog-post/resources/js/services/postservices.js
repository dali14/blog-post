import axios from "axios";
import { ref } from "vue";


export default function usePosts(){
    const posts = ref([]);
    const post = ref([]);

    const storePost=()=>{

    };

    const getPosts = async() =>{
        let response = await axios.get('api/posts');
        posts.value = response.data.data;
    };

    const getPost = async(id) =>{
        let response = await axios.get('/api/posts/'+ id);
        post.value = response.data.data;

    };

    const createPost = async(data) =>{
        await axios.post('/api/posts',data);
    };
    const updatePost = async(id) =>{
        await axios.put('/api/posts/' + id, post.value);
    };

    return{
        posts,
        post,
        getPosts,
        createPost,
        getPost,
        storePost,
        updatePost
        

    };
}