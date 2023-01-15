<template>
  <v-container fluid class="px-8">
    <!-- add home info here -->
    <v-btn to="#filled">test</v-btn>
    <SectionedHeadersComponent :sections="all_forums"/>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

import SectionedHeadersComponent from "@/components/sectioned_headers.vue";
import {forums} from "@/test_data";
export default Vue.extend({
  name: 'Thread',
  components: {
    SectionedHeadersComponent
  },
  data() {
    return {
      all_forums: forums
    }
  },
  computed: {

  }
})
</script>
  