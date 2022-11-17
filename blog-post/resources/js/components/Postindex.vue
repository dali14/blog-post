
<template>
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="flex mb-3">
            <div class="font-medium text-sm text-gray-500">{{user.email}}</div>
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
                    Posted By
                  </th>
                  <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <template v-for="post in posts" :key="post.id">
                <tr class="border-b">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" v-text="post.id"></td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap" v-text="post.title"></td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap" v-text="post.text"></td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap" v-text="post.username || ''"></td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
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

export default{

  props: {
    posts: {
      required: true,
    },
    user: {
      required: true,
    }
  },
  
    setup(props){
        return {
            posts: props.posts,
            user: props.user,
        };
    }
    
}

</script>