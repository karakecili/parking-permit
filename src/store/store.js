import Vue from "vue";
import Vuex from "vuex";

import * as mutations from "./modules/mutations";
import * as getters from "./modules/getters";
import * as actions from "./modules/actions";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {

    carList: []
  },
  getters,
  mutations,
  actions
})
