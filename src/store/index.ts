import Vue from "vue";
import Vuex from "vuex";
import { todos } from "./todos";
import { login } from "./login";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    sum(state) {
      state.count += 1;
    }
  },
  modules: {
    todos,
    login
  }
});
