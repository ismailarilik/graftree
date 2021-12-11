<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>
        <v-btn plain to="/">
          <v-icon>
            $nature_outline
          </v-icon>
          Graftree
        </v-btn>
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
  }),

  metaInfo () {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale
      },
      meta: [
        { name: 'description', content: this.$t('compare_everything') }
      ],
      title: `Graftree | ${this.$t('compare_everything')}`,
      noscript: [
        { innerHTML: `<strong>${this.$t('noscript')}</strong>` }
      ]
    }
  }
}
</script>
