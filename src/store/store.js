/* eslint-disable no-useless-escape */
import Vue from "vue";
import Vuex from "vuex";

import * as mutations from "./modules/mutations";
import * as getters from "./modules/getters";
import * as actions from "./modules/actions";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    carList: [],
    countries: [
      { name: "Germany", code: "DE", rgx: /^[A-ZÄÖÜ]{1,3}\-{0,1}[A-Z]{0,2}-{0,1}[0-9]{1,4}[H]{0,1}/ },
      { name: "Austria", code: "AT", rgx: /^[A-Z]{1,2}-{0,1}[0-9]{1,5}-{0,1}[A-Z]{0,3}/ },
      { name: "France", code: "FR", rgx: /^[A-Z]{2}-{0,1}[0-9]{3}-{0,1}[A-Z]{2}/ },
      { name: "Switzerland", code: "CH", rgx: /^[A-Z]{2}-{0,1}[0-9]{1,6}/ },
    ],
    Lang: "en",
  },
  getters,
  mutations,
  actions
})
