<template>
  <v-app>
    <v-app-bar app>
      <v-row align="center">
        <v-toolbar-title class="mx-4">Name</v-toolbar-title>
        <v-divider vertical class=""/>
        <v-btn text class="ml-4 mr-2" to="/">Home</v-btn>
        <v-btn text class="mx-2" to="/latest">Latest</v-btn>
        <v-btn text class="mx-2" to="/users">users</v-btn>
        <v-layout align-center justify-end class="mx-4">
          <template v-if="user_id">
            <v-btn text class="mx-2" :to="{name: 'users', params: {user_id: user_id}}">Profile</v-btn>
            <v-dialog v-model="logout_dialog" width="400">
              <template v-slot:activator="{on}">
                <v-btn text class="ml-2 mr-4" v-on="on">Logout</v-btn>
              </template>
              <v-card>
                <v-card-title>Logout</v-card-title>
                <v-card-text>Are you sure you wish to log out?</v-card-text>
                <v-card-actions>
                  <v-btn text @click="logout">Logout</v-btn>
                  <v-btn text @click="logout_dialog = false">Cancel</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </template>
          <v-btn text v-else class="mx-4 ma-0" to="/login">Login</v-btn>
          <v-menu :close-on-content-click="false" offset-y>
            <v-subheader class="opaque">Theme</v-subheader>
            <template v-slot:activator="{on}">
              <v-btn  class="mx-4" icon v-on="on">
                <v-icon>mdi-cog</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item>
                <v-list-item-action>
                  <v-switch @click="toggleTheme" inset color="black" :label="' ' + (dark ? 'Dark' : 'Light') + ' Mode'">
                  </v-switch>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-layout>
      </v-row>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view :key="$route.fullPath"/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import {user_id} from "@/store";

export default Vue.extend({
  name: 'App',

  data() {
    return {
      logout_dialog: false,
      dark: true
    }
  },
  methods: {
    toggleTheme() {
      this.dark = !this.dark
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
    logout() {
      this.logout_dialog = false
      user_id.value = null
    }
  },
  setup() {
    return { user_id }
  }
});
</script>
