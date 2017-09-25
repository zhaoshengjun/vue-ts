import Vue from "vue";
import App from "./App.vue";
import { store } from "./store";
// import { login } from "./store/login";

Vue.config.productionTip = false;

const load = true;

if (load) {
  import("./store/login").then(({ login }) => {
    store.registerModule("login", login);
  });
}

new Vue({
  el: "#app",
  store,
  template: "<App/>",
  components: { App }
});
