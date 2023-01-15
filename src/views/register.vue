<template>
  <v-container fluid class="pl-4">
    <v-form ref="form" class="ma-18">
      <v-row>
        <v-text-field
          label="Username" v-model="username" :rules="[required, user_valid]"
          filled/>
      </v-row>
      <v-row>
        <v-text-field
          label="Password" v-model="password" :rules="[required]"
          :type="password_show ? 'text' : 'password'"
          :append-icon="password_show ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="password_show = !password_show" required filled/>
      </v-row>
      <v-row>
        <v-text-field
            label="Confirm Password" v-model="confirm_password" :rules="[required, match]"
            :type="confirm_password_show ? 'text' : 'password'"
            :append-icon="confirm_password_show ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="confirm_password_show = !confirm_password_show" filled/>
      </v-row>
      <v-row>
        <v-checkbox label="Do you agree?" class="mb-8" :rules="[v => !!v || 'Please agree to continue']">Agree</v-checkbox>
      </v-row>
      <v-row>
        <v-btn @click="on_register">Register</v-btn>
      </v-row>
    </v-form>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Thread',
  props: {
    initial_username: {
      type: String,
    },
    initial_password: {
      type: String,
    }
  },
  data() {
    return {
      username: '',
      password: '',
      confirm_password: '',
      password_show: false,
      confirm_password_show: false,
    }
  },
  methods: {
    user_valid(v: string) {
      return v != 'admin' || "This username is already used!"
    },
    required(v: string) {
      return !!v || 'Required'
    },
    match(v: string) {
      return (v == this.password) || "The passwords do not match!"
    },
    on_register() {
      if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
        // database update
        const id = "testID"
        this.$router.push({name: 'users', params: {user_id: id}})
      }
    },
  },
  computed: {

  },
  created() {
    this.username = this.initial_username ?? ''
    this.password = this.initial_password ?? ''
  },
})
</script>
