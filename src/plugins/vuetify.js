import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import MaterialIcon from '@/components/MaterialIcon'

function missingMaterialIcons (ids) {
  const icons = {}
  for (const id of ids) {
    for (const suffix of ['fill', 'outline', 'two-tone', 'round', 'sharp']) {
      const name = `${id}_${suffix}`
      icons[name] = {
        component: MaterialIcon,
        props: {
          name
        }
      }
    }
  }
  return icons
}

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    values: {
      ...missingMaterialIcons(['nature'])
    }
  },
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
