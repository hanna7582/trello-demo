<template>
  <div>
    Board
    <div v-if="loading">loading...</div>
    <div v-else>{{bid}}</div>
    <router-link :to="`/b/${bid}/c/1`">card1</router-link>
    <router-link :to="`/b/${bid}/c/2`">card2</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  data() {
    return {
      bid:0,
      loading:true
    }
  },
  methods: {
    fetchData() {
      this.loading=true
      setTimeout(() =>{
        this.bid=this.$route.params.bid
        this.loading=false
      }, 500)
    }
  },
  created () {
    this.fetchData()
  },
}
</script>

<style>

</style>