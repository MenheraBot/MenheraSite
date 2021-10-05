import 'react-i18next';

import boleham from '../public/static/locales/en/boleham.json';
import commands from '../public/static/locales/en/commands.json';
import common from '../public/static/locales/en/common.json';
import donate from '../public/static/locales/en/donate.json';
import error from '../public/static/locales/en/error.json';
import footer from '../public/static/locales/en/footer.json';
import header from '../public/static/locales/en/header.json';
import privacy from '../public/static/locales/en/privacy.json';
import status from '../public/static/locales/en/status.json';

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
    };
  }
}
