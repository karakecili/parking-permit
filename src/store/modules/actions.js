import axios from "axios";

export const initApp = ({ state, dispatch }) => {
  dispatch("getCarsData");
  state.Lang = localStorage.getItem("Lang") ?? "en";
};

export const setCarData = ({ dispatch }, payload) => {
  axios.post("car-list.json", payload).then(() => {
    dispatch("getCarsData");
  });
};

export const getCarsData = ({ state, commit }) => {
  state.carList = [];

  axios.get("car-list.json").then((response) => {
    let data = response.data;
    for (let key in data) {
      data[key].key = key;
      commit("updateCarList", data[key]);
    }
  });
};

export const updateCarData = ({ commit }, key, payload) => {
  axios.put("car-list/" + key + ".json", payload).then((response) => {
    let data = response.data;
    for (let key in data) {
      data[key].key = key;
      commit("updateCarList", data[key]);
    }
  });
};

export const removeCarData = ({ dispatch }, payload) => {
  axios.delete("car-list/" + payload + ".json").then(() => {
    dispatch("getCarsData");
  });
};

export const removeCarDataAll = ({ dispatch }) => {
  axios.delete("car-list.json").then(() => {
    dispatch("getCarsData");
  });
};
