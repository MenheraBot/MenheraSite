import Header from './header';
import Footer from './footer';
import Head from './head';
import CookieConsent from 'react-cookie-consent';
import { useTranslation } from 'react-i18next';

type Props = {
  children: React.ReactNode;
  title?: string;
};

const Layout = ({ children, title }: Props): JSX.Element => {
  const { t } = useTranslation('common');

  return (
    <main>
      <Head title={title} />
      <Header />
      <CookieConsent
        location='bottom'
        buttonText='Okay'
        style={{ background: '#000' }}
        buttonStyle={{
          color: '#fff',
          fontWeight: 'bold',
          fontSize: '15px',
          background: '#9c5ddb',
          borderRadius: '50px',
          width: '300px',
          heigh: '30px',
        }}
      >
        {t('cookie')}
      </CookieConsent>
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
