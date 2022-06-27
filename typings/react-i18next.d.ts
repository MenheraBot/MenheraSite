import 'react-i18next';

import boleham from '../public/static/locales/en-US/boleham.json';
import changelog from '../public/static/locales/en-US/changelog.json';
import commands from '../public/static/locales/en-US/commands.json';
import common from '../public/static/locales/en-US/common.json';
import donate from '../public/static/locales/en-US/donate.json';
import error from '../public/static/locales/en-US/error.json';
import footer from '../public/static/locales/en-US/footer.json';
import header from '../public/static/locales/en-US/header.json';
import privacy from '../public/static/locales/en-US/privacy.json';
import blog from '../public/static/locales/en-US/blog.json';
import status from '../public/static/locales/en-US/status.json';

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
