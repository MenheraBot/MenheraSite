require('dotenv').config();
const { add_bot_url } = require('./database/constants.json');
const { i18n } = require('./next-i18next.config');

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
  eslint: {
    dirs: ['pages', 'utils', 'services', 'componentes', 'database'],
  },
};
