<template>
  <v-container fluid class="pl-4">
    <v-form>
      <v-select label="Forum" v-model="selected" :items="forums">

      </v-select>
      <v-text-field label="Thread Title" v-model="title" :rules="[v => !!v || 'Required']"/>
    </v-form>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'NewThread',
  components: {
  },
  data() {
    return {
      forums: ['test', 'test2'],
      selected: null,
      title: ''
    }
  },
  computed: {

  },
  methods: {
  },
  created() {
    console.log('new_thread loaded')
  }
})
</script>
