/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();
const { i18n } = require('./next-i18next.config');

const { add_bot_url } = require('./src/database/constants.json');

module.exports = {
  env: {
    API_URL: process.env.API_URL,
  },
  images: {
    domains: ['cdn.discordapp.com'],
  },
  i18n,
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
