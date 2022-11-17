<template>
    <p v-for="post in posts">{{post.title}}</p>
</template>

<script>

export default {
    props: {
        posts: {
            required: true,
        }
    },
    setup(props) {
        return {
            posts: props.posts || []
        }
    }
}
</script>