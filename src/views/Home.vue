<template>
  <div>
    <h1>Home</h1>
    <p>{{count}}</p>
  </div>
</template>

<script>
export default {
  computed:{
    count(){
      return this.$store.state
    }
  }
}
</script>
