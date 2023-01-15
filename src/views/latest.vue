<template>
  <v-container fluid>
    <v-card class="pa-4 rounded-xl" v-for="(elem, i) in latest" :key="i">
      <v-layout>
        <v-col class="mx-4 px-2 my-7 py-8 rounded-0" cols="2">
          <v-row class="justify-center">
            <v-avatar v-text="elem.user.name.split(' ', 2).map(s => s.charAt(0).toUpperCase()).join('')"
                      :color="elem.user.avatar.color" size="60"/>
          </v-row>
          <v-row class="justify-center mt-12">
            <p>text profile</p>
          </v-row>
        </v-col>
        <v-divider vertical style="border-width: 1px"/>
        <v-col class="my-4 flex-grow-1">
          <p class="ma-4 text-h5">{{ elem.name }}</p>
          <p class="ma-4">{{ elem.description }}</p>
        </v-col>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "latest",
  data() {
    return {
      latest: [{
        user: {
          name: 'Above Broad',
          avatar: {
            color: 'brown'
          }
        },
        name: 'Fortune Favors Flickering',
        description: 'Once, whence, twice, when there was night, floating mites fought for kites and longish tights'
      }]
    }
  }
}
</script>

<style scoped>

</style>