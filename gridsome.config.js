const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [
  tailwind(),
]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss(require('./purgecss.config.js')))

module.exports = {
  siteName: 'Plogging Mechelen',
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: process.env.NODE_ENV === 'development' ? 'http://localhost:1337' : 'https://plogging-mechelen-api.herokuapp.com/',
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['user', 'faq'],
        singleTypes: ['homepage'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        loginData: {
          identifier: '',
          password: ''
        }
      }
    }
  ],
  css: {
      loaderOptions: {
          postcss: {
              plugins: postcssPlugins,
          },
      },
  },
}
