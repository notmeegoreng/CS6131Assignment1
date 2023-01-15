<template>
  <v-container fluid>
    <div v-for="(section, i) in sections" :key="i" >
      <span :id="section.header.toLowerCase().replaceAll(' ', '-')" />
      <v-card class="mb-8 rounded-lg">
        <v-card-title v-text="section.header"/>
        <!--<span :id="section.header"></span>-->
        <div v-for="(cover, j) in section.covers" :key="j +'a'">
          <v-divider/>
          <v-list-item three-line :to="cover.to">
            <v-list-item-avatar v-if="cover.avatar" size="52">
              <v-avatar v-text="cover.avatar.name" :color="cover.avatar.color" size="52"></v-avatar>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-text="cover.title"/>
              <v-list-item-subtitle v-text="cover.description"/>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "sectioned_headers",
  props: {
    sections: Array[{header: String, covers: Array[{
      avatar: {name: String, color: String},
      title: String, description: String}]}]
  }
}
</script>

<style scoped>

</style>