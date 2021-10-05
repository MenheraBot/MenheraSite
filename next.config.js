/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();
const { add_bot_url } = require('./src/database/constants.json');
const { nextI18NextRewrites } = require('next-i18next/rewrites');

const localeSubpaths = {
  pt: 'pt',
  en: 'en',
};

module.exports = {
  env: {
    API_URL: process.env.API_URL,
  },
  images: {
    domains: ['cdn.discordapp.com'],
  },
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
  redirects: async () => [
    {
      source: '/add',
      destination: add_bot_url,
      permanent: true,
    },
    {
      source: '/:lang/add',
      destination: add_bot_url,
      permanent: true,
    },
  ],
};
