<template>
  <div>
    Login
    <form @submit.prevent="onSubmit">
      <div>
        <label for="email">email</label>
        <input type="text" name="email" 
          v-model="email" 
          placeholder="test@test.com"
          autofocus
        >
      </div>
      <div>
        <label for="password">password</label>
        <input type="text" name="password" 
          v-model="password" 
        >
      </div>
      <button 
        type="submit"
        :class="{'btn-success':!invalidForm}"
        :disabled="invalidForm"
      >login</button>
    </form>
    <div v-if="error">{{error}}</div>
  </div>
</template>

<script>
import {auth, setAuthInHeader} from '../api'
export default {
  data() {
    return {
      email: 'test@test.com',
      password:'123123',
      error:'',
      rPath:'',
    }
  },
  computed: {
    invalidForm() {
      return !this.email || !this.password
    }
  },
  methods: {
    onSubmit() {
      auth.login(this.email, this.password)
      .then( res => {
        localStorage.setItem('token', res.accessToken)
        setAuthInHeader(res.accessToken)
        this.$router.push(this.rPath)
      })
      .catch( e => {
        this.error = e.data.error
      })
    }
  },
  created () {
    this.rPath = this.$route.query.rPath || '/'
  },
}
</script>

<style>

</style>