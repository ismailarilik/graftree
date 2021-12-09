import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#388E3C',
        accent: '#B9F6CA'
      },
      dark: {
        primary: '#388E3C',
        accent: '#B9F6CA'
      }
    }
  }
})
