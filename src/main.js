import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import Vuelidate from "vuelidate";
import { store } from "./store/store"
import axios from "axios";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.use(Vuelidate);

axios.defaults.baseURL = "https://parking-permitt-default-rtdb.europe-west1.firebasedatabase.app/"
axios.defaults.headers.get["Accepts"] = "application/json"

export const eventBus = new Vue();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
