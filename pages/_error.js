import style from '../styles/pages/error.module.css';
import Head from '../components/head';
import Footer from '../components/footer';
import Header from '../components/header';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Link from 'next/link';

const Custom500 = () => {
  const { t } = useTranslation('common');

  return (
    <div className={style.box}>
      <Head title={t('title')} favicon='/assets/icon404.png' />
      <Header />
      <img src='/assets/404.png' />
      <h1>
        <span>500</span>
        <div id={style.responsive}>
          {' '}
          - {t('error500')}
          <br />
        </div>
        <h3>
          <center>
            <p>
              {t('500.start')}
              <br />
              {t('500.end')}
            </p>
          </center>
          <p>
            <br />
            <Link href='/' passHref>
              <b>{t('back')}</b>
            </Link>
          </p>
        </h3>
      </h1>
      <Footer />
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'header', 'footer'])),
      // Will be passed to the page component as props
    },
  };
}

export default Custom500;
