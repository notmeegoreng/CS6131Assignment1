import { defineConfig } from '@vue/cli-service'
defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: process.env.NODE_ENV === 'production' ? '/CS6131Assignment1/' : '/'
})
