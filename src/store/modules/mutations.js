
import i18n from "../../i18n/index"

export const updateCarList = (state, payload) => {
  state.carList.push(payload);
}

export const SetLocale = (state, locale) => {
  state.Lang = locale
  localStorage.setItem("Lang", locale)
  i18n.locale =        locale
}
