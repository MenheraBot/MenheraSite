import NextI18Next from 'next-i18next';
import * as Next from 'next/config';
import path from 'path';

export default new NextI18Next({
  defaultLanguage: 'pt',
  otherLanguages: ['en'],
  localeSubpaths: Next.default().publicRuntimeConfig.localeSubpaths,
  localePath: path.resolve('./public/static/locales'),
});
