<template>
  <v-container fluid class="pl-4">
    <!-- add thread info here -->
    <div v-for="post in posts" :key="post">
      <Post :post="post"/>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import PostComponent from '@/components/post.vue'
import Post from "@/models/post";
import Profile from '@/models/profile';
export default Vue.extend({
  name: 'Thread',
  components: {
    Post: PostComponent
  },
  data() {
    return {
      posts: [
          new Post(new Profile("green!", 4), "1 text test <b> <i> green </i>  a </b>"),
          new Post(new Profile("weewoo", 4), "2 <span class=spoiler @click=\"spoil\"> test </span>")]
    }
  },
  computed: {

  },
  created() {
    console.log('bbb')
  }
})
</script>
