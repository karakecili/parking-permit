export const getCars = (state) => {
  return state.carList;
};

export const getCountries = (state) => {
  return state.countries;
};

export const getCarsFiltered = (state) => (value) => {
  return state.carList.filter(
    (x) => x.name.toLocaleUpperCase().includes(value) || x.plate.toLocaleUpperCase().includes(value)
  );
};
