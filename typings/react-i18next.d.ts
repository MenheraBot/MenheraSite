import 'react-i18next';

import boleham from '../public/static/locales/pt-BR/boleham.json';
import changelog from '../public/static/locales/pt-BR/changelog.json';
import commands from '../public/static/locales/pt-BR/commands.json';
import common from '../public/static/locales/pt-BR/common.json';
import donate from '../public/static/locales/pt-BR/donate.json';
import error from '../public/static/locales/pt-BR/error.json';
import footer from '../public/static/locales/pt-BR/footer.json';
import header from '../public/static/locales/pt-BR/header.json';
import privacy from '../public/static/locales/pt-BR/privacy.json';
import blog from '../public/static/locales/pt-BR/blog.json';
import status from '../public/static/locales/pt-BR/status.json';

declare module 'react-i18next' {
  // and extend them!
  interface CustomTypeOptions {
    // custom namespace type if you changed it
    // defaultNS: 'ns1';
    // custom resources type
    resources: {
      boleham: typeof boleham;
      commands: typeof commands;
      common: typeof common;
      donate: typeof donate;
      error: typeof error;
      footer: typeof footer;
      header: typeof header;
      privacy: typeof privacy;
      status: typeof status;
      changelog: typeof changelog;
      blog: typeof blog;
    };
  }
}
