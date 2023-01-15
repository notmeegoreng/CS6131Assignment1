<template>
  <div>
    <v-breadcrumbs class="" large :items="prev_pages">
      <template v-slot:divider>
        <v-icon>mdi-menu-right</v-icon>
      </template>
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item :to="item.to">{{ item.last? '': item.text }}</v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
    <div class="text-h4 px-6 mb-8">{{ prev_pages[prev_pages.length - 1].text }}</div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'TitledBreadcrumbs',
  props: {
    prev_pages: {}
  }
}
</script>