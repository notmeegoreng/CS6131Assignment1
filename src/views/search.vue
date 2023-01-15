<template>
  <v-container fluid>
    <v-text-field placeholder="Search" prepend-icon="mdi-magnify"></v-text-field>
    <v-btn-toggle class="mt-3" v-model="selected" @change="test">
      <v-btn>Forums</v-btn>
      <v-btn>Threads</v-btn>
      <v-btn>Posts</v-btn>
      <v-btn>Users</v-btn>
    </v-btn-toggle>
    <v-divider class="my-8"/>
    <v-card class="pa-4" v-for="(elem, i) in found" :key="i">
      <v-card-title>
        <v-avatar v-text="elem.name.split(' ', 2).map(s => s.charAt(0).toUpperCase()).join('')"
                  :color="elem.avatar.color" size="60"/>
        <p class="ma-4 ml-8">{{ elem.name }}</p>
      </v-card-title>
      <v-card-text>{{ elem.description }}</v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "search",
  props: {
    query: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      selected: 3,
      found: [{avatar: {name: 'AB', color: 'brown'}, name: 'Above Broad', description: 'Most Ardently Enormous'}]
    }
  },
  methods: {
    test() {
      console.log(this.selected)
    }
  }
}
</script>

<style scoped>

</style>