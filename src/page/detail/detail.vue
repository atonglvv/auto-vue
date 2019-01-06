<template>
  <div class="app">
    Hello Detail
    <p>{{id}}</p>
  </div>
</template>

<script>
export default {
  data(){
    return{
      id:""
    }
  },
  created() {
      this.id = this.$route.query.id;
  }
}
</script>

<style>
</style>
