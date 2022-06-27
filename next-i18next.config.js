// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['en-US', 'pt-BR'],
  },
  localePath: path.resolve('./public/static/locales'),
};
