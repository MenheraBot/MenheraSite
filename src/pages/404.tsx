import style from '../styles/pages/error.module.css';
import Head from '../components/head';
import Header from '../components/header';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/footer';
import { useTranslation } from 'react-i18next';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const NotFoundPage = (): JSX.Element => {
  const { t } = useTranslation('error');

  return (
    <>
      <Head title={t('title')} favicon='/assets/icon404.png' />
      <Header />
      <div className={style.box}>
        <Image src='/assets/404.png' alt='Menhera not found' width={512} />
        <h1>
          <span>404</span>
          <div id={style.responsive}>
            {' '}
            - {t('pnf')}
            <br />
          </div>
          <h3>
            <div className='text-center'>
              <p>
                {t('text.start')}
                <br />
                {t('text.end')}
              </p>
            </div>
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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['error', 'header', 'footer'])),
    },
  };
};

export default NotFoundPage;
