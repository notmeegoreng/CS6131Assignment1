<template>
  <v-container fluid class="pl-4">
    <v-form d-flex>
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
export default Vue.extend({
  name: 'Thread',
  components: {
  },
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
      // verify
      this.$router.push({name: 'Home'})
    },
    on_register() {
      this.$router.push({name: 'Register'})
    }
  },
  computed: {

  }
})
</script>
