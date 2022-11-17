<template> 

<form class="space-y-6">
    <div>
        <label for="name">Title Post</label>
        <input type="text" class="block" id="title" >
    </div>
    <div>
        <label for="name">Description Post</label>
        <input type="text" class="block" id="text" >
    </div>
    <button type="submit"  class="bg-green-500 px-2 py-1 text-white rounded">ADD Post</button>
</form>
    
</template>

<script>

export default{

props: {

  user: {
    required: true,
  }
},

  setup(props){
      return {
          
          user: props.user,
      };
  }
  
}

</script>