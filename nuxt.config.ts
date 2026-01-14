// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'motion-v/nuxt'
  ],

  runtimeConfig: {
    dribbbleClientId: process.env.DRIBBBLE_CLIENT_ID || '',
    dribbbleClientSecret: process.env.DRIBBBLE_CLIENT_SECRET || '',
    dribbbleAccessToken: process.env.DRIBBBLE_ACCESS_TOKEN || '',
    public: {
      dribbbleUsername: process.env.DRIBBBLE_USERNAME || 'zerox9dev'
    }
  },

  image: {
    quality: 95,
    densities: [1, 2],
    format: ['png'],
    provider: 'ipx',
    ipx: {
      maxAge: 60 * 60 * 24 * 365
    }
  },

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2024-11-01',

  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
