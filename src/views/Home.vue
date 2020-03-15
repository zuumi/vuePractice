<template>
  <div>
    <h1>Home</h1>
    <p>{{ count }}</p>
    <p>{{ double }}</p>
    <p>{{ triple }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    double(){
      return this.$store.getters.double;
    },
    triple(){
      return this.$store.getters.triple;
    },
    count(){
      return this.$store.state.count;
    }
  }
};

</script>
