<template>
  <div>
    <button @click=increment(2) name="button">+1</button>
    <button @click=decrement(2) name="button">-1</button>
  </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  methods:{
    ...mapMutations(["increment","decrement"])
    // increment(){
    //   this.$store.commit("increment",1);
    // },
    // decrement(){
    //   this.$store.commit("decrement",1);
    // }
  }
}
</script>
