import style from '../styles/pages/error.module.css';
import Head from '../components/head';
import Footer from '../components/footer';
import Header from '../components/header';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import { GetStaticProps } from 'next';

const CustomErrorPage = (): JSX.Element => {
  const { t } = useTranslation('error');

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
          <div className='text-center'>
            <p>
              {t('500.start')}
              <br />
              {t('500.end')}
            </p>
          </div>
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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['error', 'header', 'footer'])),
    },
  };
};

export default CustomErrorPage;
