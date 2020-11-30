<template>
  <div>
    <Navbar />
    <div v-if="loading">Loading...</div>
    <div v-else>
      api result:{{apiRes}}
    </div>
    <div v-if="error">{{error}}</div>
    
    <router-link to="/b/1">board1</router-link>
    <router-link to="/b/2">board2</router-link>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import {board} from '../api'
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      loading: true,
      apiRes:'',
      error:''
    }
  },
  created () {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.loading=true 

      board.fetch()
      .then(res => {
        console.log(res);
        this.apiRes=res.list
      })
      .finally(() => {
        this.loading=false
      })
    }
  },
}
</script>

<style>

</style>