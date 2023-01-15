<template>
  <v-container fluid class="pl-4">
    <!-- add forum info here -->
    <v-row>
    <v-breadcrumbs large :items="prev_pages">
      <template v-slot:divider>
        <v-icon>mdi-menu-right</v-icon>
      </template>
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item v-if="item.last" :to="item.to"></v-breadcrumbs-item>
        <v-breadcrumbs-item v-else :to="item.to">{{ item.text }}</v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
    </v-row>
    <v-row>
      <div class="text-h3">{{ prev_pages[-1].text }}</div>
    </v-row>
    <SectionedHeadersComponent :sections="threads"/>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import SectionedHeadersComponent from "@/components/sectioned_headers.vue";
import {forum_id_map} from "@/test_data";
export default Vue.extend({
  name: 'Forum',
  props: {
    forum_id: String
  },
  components: {
    SectionedHeadersComponent
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
          to: {name: 'home', hash: `#${forum.section.toLowerCase().replaceAll(' ', '-')}`}},
        {text: forum.name, last: true}]
    }
  },
  data() {
    return {
      threads: [
        {
          header: 'Pinned Threads', covers: [
            {
              avatar: {name: 'M', color: 'blue'},
              title: 'On Moderation',
              description: [ // generate long description
                'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth',
                'eleventh', 'twelfth', 'thirteenth', 'fourteenth', 'fifteenth', 'sixteenth', 'seventeenth',
                'eighteenth', 'nineteenth', 'twentieth'
              ].join('ly, how dare you. ')+ 'ly, how dare you.',
              to: 'a/threads/b'
            },
            {
              avatar: {name: 'Ww', color: 'orange'},
              title: 'BAA BAA',
              description: 'black sheep',
              to: 'a/threads/ccc'}
          ]
        },
        {
          header: 'Normal Threads', covers: [
            {
              title: 'OO',
              description: 'woah',
              to: 'a/threads/d'
            },
            {
              title:'Moose',
              description: 'craze',
              to: 'a/threads/ee'
            }
          ]
        }]
    }
  }
})
</script>
