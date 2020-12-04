import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zhLocale from './zh'
import enLocale from './en'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zh', //默认显示语言
  messages: {
    zh: {
      ...zhLocale,
    },
    en: {
      ...enLocale,
    }
  }
})

export default i18n
