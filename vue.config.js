import { defineConfig } from '@vue/cli-service'

export default defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    port: 1212
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/CS6131Assignment1/' : '/',
})
