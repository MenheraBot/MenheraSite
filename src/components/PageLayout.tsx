import { Footer } from './common/Footer';
import { Seo } from './common/Seo';
import { Header } from './common/Header';
import CookieConsent from 'react-cookie-consent';
import { useTranslation } from 'next-i18next';

type Props = {
  children: React.ReactNode;
  page: string;
};

const Layout = ({ children, page }: Props): JSX.Element => {
  const { t } = useTranslation('header');

  return (
    <main>
      <Seo page={page} />
      <Header />
      {/* @ts-expect-error This works as intended  */}
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
