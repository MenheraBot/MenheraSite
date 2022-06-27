/* eslint-disable @typescript-eslint/no-var-requires */

const { i18n } = require('./next-i18next.config');

module.exports = {
  images: {
    domains: ['cdn.discordapp.com'],
  },
  i18n,
  redirects: async () => [
    {
      source: '/add',
      destination: process.env.NEXT_PUBLIC_BOT_INVITE_URL,
      permanent: true,
    },
    {
      source: '/invite',
      destination: process.env.NEXT_PUBLIC_BOT_INVITE_URL,
      permanent: true,
    },
    {
      source: '/github',
      destination: process.env.NEXT_PUBLIC_GITHUB_URL,
      permanent: true,
    },
    {
      source: '/support',
      destination: process.env.NEXT_PUBLIC_SUPPORT_URL,
      permanent: true,
    },
  ],
};
