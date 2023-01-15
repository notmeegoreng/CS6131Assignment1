<template>
  <v-container fluid class="pl-4">
    <TitledBreadcrumbs :prev_pages="prev_pages"/>
    <div class="mb-16" >
      <PostComponent v-for="(post, i) in posts" :key="i" :post="post"/>
    </div>
    <v-pagination v-model="page" length="10"></v-pagination>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

import Post from "@/models/post";
import Profile from '@/models/profile';
import PostComponent from '@/components/Post.vue'
import TitledBreadcrumbs from "@/components/TitledBreadcrumbs.vue";
import {forum_id_map} from "@/test_data";
import {spoiler_hide} from "@/store";

export default Vue.extend({
  name: 'Thread',
  props: {
    forum_id: String,
    thread_id: String
  },
  components: {
    TitledBreadcrumbs,
    PostComponent
  },
  data() {
    return {
      posts: [
        new Post(new Profile("green!", 4), "1 text test <b> <i> green </i>  a </b>"),
        new Post(new Profile("weewoo", 4), "2 <span class=spoiler @click=\"spoil\"> test </span>"),
        new Post(new Profile("green!", 4), "1 text test <b> <i> green </i>  a </b>"),
        new Post(new Profile("green!", 4), "1 text test <b> <i> green </i>  a </b>"),
        new Post(new Profile("weewoo", 4), "2 <span class=spoiler @click=\"spoil\"> test </span>")
      ],
      page: 4
    }
  },
  computed: {
    prev_pages() {
      /* eslint-disable */
      // @ts-ignore
      const forum: {section: string, name: string} = forum_id_map[this.forum_id as string]
      console.log(forum)
      return [
        {
          text: 'Home',
          to: {name: 'home', hash: `#${forum.section.toLowerCase().replaceAll(' ', '-')}`}
        },
        {
          text: forum.name,
          to: {name: 'forum', props: {forum_id: this.forum_id}}
        },
        {text: 'Test Thread', last: true}
      ]
    }
  },
  methods: {
    hide_spoilers() {
      Array.from(document.querySelectorAll('.spoiler')).forEach(spoiler => {
        spoiler.classList.remove('opened-spoiler')
      }, false)
    }
  },
  created() {
    spoiler_hide.value = true
  },
  beforeDestroy() {
    spoiler_hide.value = false
  }
})
</script>
