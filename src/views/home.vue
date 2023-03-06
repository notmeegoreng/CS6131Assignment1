<template>
  <v-container fluid class="px-8">
    <!-- add home info here -->
    <SectionedCoversComponent :sections="all_forums"/>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

import SectionedCoversComponent from "@/components/SectionedCovers.vue";
import {forums} from "@/test_data";

export default Vue.extend({
  name: 'Thread',
  components: {
    SectionedCoversComponent
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