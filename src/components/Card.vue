<template>
  <div>
    Card
    <div v-if="loading">loading...</div>
    <div v-else>{{cid}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cid:0,
      loading:true
    }
  },
  methods: {
    fetchData() {
      this.loading=true
      setTimeout(() =>{
        this.cid=this.$route.params.cid
        this.loading=false
      }, 500)
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    '$route':{
      handler:'fetchData',
      immediate:true
    }
  },
}
</script>

<style>

</style>