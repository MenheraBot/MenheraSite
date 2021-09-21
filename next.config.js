require('dotenv').config()
const { add_bot_url } = require('./database/constants.json')
const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = {
  pt: 'pt',
  en: 'en'
}

module.exports = {
  env: {
    API_URL: process.env.API_URL
  },
  images: {
    domains: ['cdn.discordapp.com']
  },
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
  redirects: async () => [
    {
      source: '/add',
      destination: add_bot_url,
      permanent: true
    },
    {
      source: '/:lang/add',
      destination: add_bot_url,
      permanent: true
    }
  ],
  headers: async () =>
    [
      {
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]

}
