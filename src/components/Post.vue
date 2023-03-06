<template>
    <v-card class="d-flex rounded-xl ma-4" elevation="4" >
        <v-col class="mx-4 px-2 my-7 py-8 rounded-0" cols="2"  style="border-right: solid 2px gray">
            text text profile text <br> {{ post.poster.name }}
        </v-col>
        <v-col class="my-4 flex-grow-1">
            <div v-html="processed_text"/>
        </v-col>
    </v-card>
</template>

<script lang="ts">
import Vue from 'vue'

import Post from '@/models/post'

export default Vue.extend({
  name: 'PostComponent',
  props: {
      post: {
        type: Post,
        required: true
      }
  },
  methods: {
  },
  computed: {
      processed_text() {
        // todo: process markdown and spoilers here

        return (this.post as Post).content || ''
      }
  },
  data() {
      return {
          not_done: true
      }
  },
  mounted() {
    let self = this as Vue & {not_done: boolean};
    if (self.not_done) {
      self.not_done = false;

      Array.from(document.querySelectorAll('.spoiler')).forEach(spoiler => {
        spoiler.addEventListener("click", () => {
          spoiler.classList.add('opened-spoiler')
        })
      }, false)
    }
  },
})
</script>
<style>
.spoiler {
    background-color: black;
    color: transparent;
    user-select: none;
}

.opened-spoiler, .spoiler:active, .spoiler:hover {
    background-color: #333333;
    color: inherit;
}
</style>