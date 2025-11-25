// vue.config.js
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/eventos-santar-m-app/' // Substitua 'eventos-santarem-app' pelo NOME EXATO do seu repositório no GitHub
    : '/'
})eventos-santar-m-app