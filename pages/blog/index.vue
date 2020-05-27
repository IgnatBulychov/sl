<template>
  <article>
    <h1>{{blogPosts}}</h1>
  </article>
</template>
<script>
export default {
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts;
    },
  },  
}
</script>