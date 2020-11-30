<template>
  <div>
    <router-link to="/">Home</router-link>
    <a href="" v-if="isAuth" @click.prevent="logout">Logout</a>
    <router-link to="/login" v-else>Login</router-link>

  </div>
</template>

<script>
import { setAuthInHeader } from '../api'
export default {
  computed: {
    isAuth() {
      return localStorage.getItem('token')
    }
  },
  methods: {
    logout() {
      delete localStorage.token
      setAuthInHeader(null)
      this.$router.push('/login')
    }
  },
}
</script>

<style>

</style>