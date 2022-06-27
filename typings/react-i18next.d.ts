import 'react-i18next';

import footer from '../public/static/locales/pt-BR/footer.json';
import header from '../public/static/locales/pt-BR/header.json';
import index from '../public/static/locales/pt-BR/index.json';
import legal from '../public/static/locales/pt-BR/legal.json';
import status from '../public/static/locales/pt-BR/status.json';
import errors from '../public/static/locales/pt-BR/errors.json';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: {
      footer: typeof footer;
      header: typeof header;
      index: typeof index;
      status: typeof status;
      legal: typeof legal;
      errors: typeof errors;
    };
  }
}
