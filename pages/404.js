import style from '../styles/pages/error.module.css';
import Head from '../components/head';
import Header from '../components/header';
import Link from 'next/link';
import Footer from '../components/footer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

const Custom404 = () => {
  const { t } = useTranslation('error');

  return (
    <>
      <Head title={t('title')} favicon='/assets/icon404.png' />
      <Header />
      <div className={style.box}>
        <img src='/assets/404.png' />
        <h1>
          <span>404</span>
          <div id={style.responsive}>
            {' '}
            - {t('pnf')}
            <br />
          </div>
          <h3>
            <center>
              <p>
                {t('text.start')}
                <br />
                {t('text.end')}
              </p>
            </center>
            <p>
              <br />
              <Link href='/' passHref>
                <b>
                  <a className='cursor-pointer'>{t('back')}</a>
                </b>
              </Link>
            </p>
          </h3>
        </h1>
      </div>
      <Footer />
    </>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['error'])),
      // Will be passed to the page component as props
    },
  };
}

export default Custom404;
