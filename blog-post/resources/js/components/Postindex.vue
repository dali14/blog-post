<template>
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="flex mb-3">
            <router-link :to="{name:'posts.add'}" class="bg-green-500 px-2 py-1 text-white rounded">Add Post</router-link>
        </div>
          <div class="overflow-hidden">
            <table class="min-w-full">
              <thead class="border-b">
                <tr>
                  <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    id
                  </th>
                  <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    title
                  </th>
                  <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Text
                  </th>
                  <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Id Posted
                  </th>
                </tr>
              </thead>
              <tbody>
                <template v-for="post in posts" :key="post.id">
                <tr class="border-b">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" v-text="post.id"></td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap" v-text="post.title"></td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap" v-text="post.text"></td>
                  <td>
                    
                    </td>
                </tr>
                </template>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>  
    </template>

<script>
import { onMounted } from 'vue';
import usePosts from '../services/postservices.js';

export default{
    setup(){
        const{ posts,getPosts} = usePosts();
        onMounted(getPosts());
        return {
            posts
        };
    }
    
}

</script>