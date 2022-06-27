import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './locales/en.json'
import tr from './locales/tr.json'
import de from './locales/de.json'

Vue.use(VueI18n)

const messages = { en: en, tr: tr, de: de };
const i18n = new VueI18n({
    locale: localStorage.getItem('Lang') || 'en',
    messages,
});

export default i18n;
