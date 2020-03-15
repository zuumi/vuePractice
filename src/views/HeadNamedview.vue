<template>
  <div>
    <button @click=increment name="button">+1</button>
    <button @click=decrement name="button">-1</button>
  </div>
</template>

<script>
export default {
  methods:{
    increment(){
      this.$store.state.count++;
    },
    decrement(){
      this.$store.state.count--;
    },
  }
}
</script>
