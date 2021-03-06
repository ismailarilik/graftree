module.exports = {
  chainWebpack (config) {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Graftree'
        return args
      })
  },

  pwa: {
    name: 'Graftree',
    themeColor: '#FFFFFF',
    msTileColor: '#FFFFFF',
    iconPaths: {
      maskIcon: null
    },
    manifestOptions: {
      start_url: 'https://graftree.com',
      background_color: '#FFFFFF',
      icons: [
        {
          src: './img/icons/android-chrome-36x36.png',
          sizes: '36x36',
          type: 'image/png'
        },
        {
          src: './img/icons/android-chrome-48x48.png',
          sizes: '48x48',
          type: 'image/png'
        },
        {
          src: './img/icons/android-chrome-72x72.png',
          sizes: '72x72',
          type: 'image/png'
        },
        {
          src: './img/icons/android-chrome-96x96.png',
          sizes: '96x96',
          type: 'image/png'
        },
        {
          src: './img/icons/android-chrome-144x144.png',
          sizes: '144x144',
          type: 'image/png'
        },
        {
          src: './img/icons/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: './img/icons/android-chrome-256x256.png',
          sizes: '256x256',
          type: 'image/png'
        },
        {
          src: './img/icons/android-chrome-384x384.png',
          sizes: '384x384',
          type: 'image/png'
        },
        {
          src: './img/icons/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        },
        {
          src: './img/icons/android-chrome-maskable-192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'maskable'
        },
        {
          src: './img/icons/android-chrome-maskable-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable'
        }
      ]
    }
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true,
      enableBridge: false
    }
  },

  transpileDependencies: [
    'vuetify'
  ]
}
