<template>
  <v-container fluid class="pl-4">
    <v-form ref="form">
      <v-row>
        <v-text-field label="Username" v-model="username" :rules="[required]" filled/>
      </v-row>
      <v-row>
        <v-text-field
            label="Password" v-model="password" :rules="[required]"
            :type="password_show ? 'text' : 'password'" filled/>
      </v-row>
      <v-row>
        <v-btn color="primary" @click="on_login">
          Login
        </v-btn>
        <v-btn color="secondary" class="mx-8" @click="on_register">
          Register
        </v-btn>
      </v-row>
    </v-form>
  </v-container>
</template>
  
<script lang="ts">
import Vue from 'vue'
import {user_id} from "@/store";

export default Vue.extend({
  name: 'Thread',
  data() {
    return {
      username: '',
      password: '',
      password_show: false,
    }
  },
  methods: {
    required(v: string) {
      return !!v || "Required"
    },
    on_login() {
      if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
        // verify
        user_id.value = "testID"
        this.$router.push({name: 'home'})
      }
      // verify

    },
    on_register() {
      this.$router.push({name: 'register', params: {initial_username: this.username, initial_password: this.password}})
    }
  },
  computed: {

  }
})
</script>
  