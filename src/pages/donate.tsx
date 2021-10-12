import Head from '../components/head';
import Footer from '../components/footer';
import Header from '../components/header';
import Image from 'next/image';

import style from '../styles/pages/donate.module.css';
import { useTranslation } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';

const DonatePage = (): JSX.Element => {
  const { t } = useTranslation('donate');

  return (
    <div className={style.container}>
      <Head title={t('title')} favicon='assets/favicon.png' />
      <Header />
      <section className='container mx-auto flex self-center items-center place-self-center justify-center text-center h-screen sm:mt-24'>
        <div className='flex flex-col w-3/4 mt-32'>
          <h1 className='text-7xl text-purple-800 sm:text-6xl font-bold -mt-52 text-shadow'>
            {t('h1')}
          </h1>
          <p className='text-purple-700 text-2xl sm:text-lg mt-4'>{t('p')}</p>

          <div className='my-8 text-5xl sm:text-2xl text-white'>
            <span className='font-semibold text-green-400'>Pix: </span>
            donate@menherabot.xyz
          </div>

          <div className={style.imageContainer}>
            <Image alt='Menhera Crying' src='/assets/cry.png' width='300' height='400' />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['donate', 'header', 'footer'])),
    },
  };
};

export default DonatePage;
