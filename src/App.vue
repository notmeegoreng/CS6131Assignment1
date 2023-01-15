<template>
  <v-app>
    <v-app-bar app>
      <v-row align="center">
        <v-toolbar-title class="mx-4">Name</v-toolbar-title>
        <v-divider vertical class=""/>
        <v-btn text class="ml-4 mr-2" :to="{name: 'home'}" exact>Home</v-btn>
        <v-btn text class="mx-2" :to="{name: 'latest'}">Latest</v-btn>
        <v-btn text class="mx-2" :to="{name: 'all_users'}" exact>Users</v-btn>
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
          <v-menu class="" :close-on-content-click="false" offset-y>
            <v-subheader>Theme</v-subheader>
            <template v-slot:activator="{on}">
              <v-btn class="mx-4" icon v-on="on">
                <v-icon>mdi-cog</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item>
                <v-list-item-action>
                  <v-switch @click="toggleTheme" inset color="black"/>
                </v-list-item-action>
                <v-list-item-content>
                  {{(dark ? 'Dark' : 'Light') + ' Mode'}}
                </v-list-item-content>
              </v-list-item>
              <v-list-item v-if="spoiler_hide">
                <v-list-item-content>
                  <v-btn>
                    Hide Spoilers
                  </v-btn>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-menu class="" :close-on-content-click="false" offset-y style="opacity: 1">
            <template v-slot:activator="{on}">
              <v-btn class="mx-4" icon v-on="on">
                <v-icon>mdi-magnify</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item>
                <v-list-item-action>
                  <v-text-field v-model="search_text" placeholder="Search"
                                @keydown.enter="on_enter"/>
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
import {spoiler_hide, user_id} from "@/store";

export default Vue.extend({
  name: 'App',

  data() {
    return {
      logout_dialog: false,
      dark: true,
      search_text: ''
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
    },
    on_enter() {
      console.log(this.search_text)
      this.$router.push({name: 'search', params: {query: this.search_text}})
    }
  },
  setup() {
    return { user_id, spoiler_hide }
  }
});
</script>
