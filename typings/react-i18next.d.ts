import 'react-i18next';

import footer from '../public/static/locales/pt-BR/footer.json';
import header from '../public/static/locales/pt-BR/header.json';
import index from '../public/static/locales/pt-BR/index.json';
import status from '../public/static/locales/pt-BR/status.json';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: {
      footer: typeof footer;
      header: typeof header;
      index: typeof index;
      status: typeof status;
    };
  }
}
