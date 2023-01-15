<template>
  <v-container fluid class="px-8">
    <TitledBreadcrumbs :prev_pages="prev_pages"/>
    <SectionedCoversComponent :sections="threads"/>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import SectionedCoversComponent from "@/components/SectionedCovers.vue";
import {forum_id_map, threads} from "@/test_data";
import TitledBreadcrumbs from "@/components/TitledBreadcrumbs.vue";

export default Vue.extend({
  name: 'Forum',
  props: {
    forum_id: String
  },
  components: {
    TitledBreadcrumbs,
    SectionedCoversComponent
  },
  data() {
    return {
      threads
    }
  },
  computed: {
    prev_pages() {
      console.log(this.forum_id)
      /* eslint-disable */
      // @ts-ignore
      const forum: {section: string, name: string} = forum_id_map[this.forum_id as string]
      console.log(forum)
      return [
        {
          text: 'Home',
          to: {name: 'home', hash: `#${forum.section.toLowerCase().replaceAll(' ', '-')}`}
        },
        {text: forum.name, last: true}
      ]
    }
  }
})
</script>
