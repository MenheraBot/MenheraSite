import Head from '../components/head';
import CookieConsent from 'react-cookie-consent';

import constants from '../database/constants.json';
import Image from 'next/image';
import Footer from '../components/footer';
import Header from '../components/header';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { useTranslation } from 'react-i18next';

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

const HomePage = (): JSX.Element => {
  const { t } = useTranslation('common');

  return (
    <div>
      <Head title='Menhera Bot' favicon='assets/favicon.png' />
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
      <div className='w-full h-screen sm:h-auto flex justify-center'>
        <section className='px-24 sm:px-2 w-11/12 h-full flex flex-row mt-28 sm:my-10 justify-around'>
          <div className='relative w-52	h-96 sm:hidden'>
            <Image src='/assets/men.png' layout='fill' alt='Menhera' />
          </div>
          <div className='w-3/5	sm:w-full'>
            <h1 className='text-4xl font-extrabold text-white'>{t('h1')}</h1>
            <p className='text-xl text-gray-500 mt-10 mb-5 sm:text-lg'>{t('p')}</p>
            <a href={constants.add_bot_url}>
              <button className='animate-wiggle p-4 rounded-2xl ' type='submit'>
                {t('b')}
              </button>
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'header', 'footer'])),
    },
  };
};

export default HomePage;
