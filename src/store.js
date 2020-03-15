import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    count:2
  },
  getters:{
    double: state =>state.count*2,
    triple: state =>state.count*3
  }
});
