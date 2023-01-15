<template>
  <v-container fluid class="pl-4">
    <v-card class="mx-4 pa-8 rounded-xl">
      <v-card-title>
        <v-avatar v-if="image_src" size="80">
          <img :src="image_src" alt="Profile Picture"/>
        </v-avatar>
        <v-avatar v-else v-text="user.name.split(' ', 2).map(s => s.charAt(0).toUpperCase()).join('')"
                  :color="user.avatar.color" size="80"/>
        <p class="ma-4 ml-8">{{ user.name }}</p>
      </v-card-title>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title><p>Description</p></v-list-item-title>
          <v-textarea :disabled="not_editing" solo v-model="user.description">
          </v-textarea>
        </v-list-item-content>
      </v-list-item>
      <v-card-actions class="align-center">
        <v-layout justify-end>
          <v-btn class="align-center" @click="not_editing = !not_editing">Edit</v-btn>
        </v-layout>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Thread',
  props: {
    user_id: {
      type: String,
      required: true
    }
  },
  components: {
  },
  data() {
    return {
      image_src: '',
      user: {avatar: {name: 'AB', color: 'brown'}, name: 'Above Broad', description: 'Most Ardently Enormous'},
      not_editing: true
    }
  },
  methods: {
  },
})
</script>
