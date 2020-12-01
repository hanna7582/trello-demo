<template>
  <nav class="header">
    <div class="header-logo">
      <router-link to="/">Home</router-link>
    </div>
    <div class="header-auth">
      <a href="" v-if="isAuth" @click.prevent="logout">Logout</a>
      <router-link v-else to="/login">Login</router-link>
    </div>
  </nav>
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

<style lang="scss">
.header {
  flex: none;
  background-color: rgba(0,0,0,.15);
  height: 32px;
  padding: 4px;
  a {
    display: block;
    height: 30px;
    line-height: 30px;
    text-decoration: none;
    color: rgba(255,255,255,.5);
  }
}
.header-logo {
  position: absolute;
  left: 50%;
  top: 7px;
  margin-left: -30px;
  text-align: center;
  font-weight: bolder;
  font-size: 24px;
  a:hover,
  a:focus {
    color: rgba(255,255,255,.9);
  }
}
.header-auth {
  position: absolute;
  right: 15px;
  top: 5px;
  a {
    border-radius: 2px;
    padding: 0 10px;
    background-color: rgba(255,255,255, .5);
    color: white;
    transition: all .3s;
  }
  a:hover,
  a:focus {
    background-color: rgba(255,255,255, .3);
  }
}
</style>