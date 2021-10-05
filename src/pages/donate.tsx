import i18n from '../services/i18n';
import Head from '../components/head';
import Footer from '../components/footer';
import Header from '../components/header';
import Image from 'next/image';

import style from '../styles/pages/donate.module.css';

const Donate = ({ t }) => {
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
            <Image src='/assets/cry.png' width='300' height='400' />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

Donate.getInitialProps = async () => ({
  namespacesRequired: ['donate', 'header', 'footer'],
});

export default i18n.withTranslation('donate')(Donate);
