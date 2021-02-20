require('dotenv').config()
const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = {
  pt: 'pt',
  en: 'en'
}

module.exports = {
  env: {
    API_URL: process.env.API_URL
  },
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
}
