import i18n from '../services/i18n';
import Head from '../components/head';
import Footer from '../components/footer';
import Header from '../components/header';
import Image from 'next/image';

const Donate = ({ t }) => {
  return (
    <div>
      <Head title={t('title')} favicon='assets/favicon.png' />
      <Header />
      <section className='container mx-auto flex self-center items-center place-self-center justify-center text-center h-screen'>
        <Image
          src='/assets/cry.png'
          alt='menhera cry'
          width='333'
          height='444'
          className='md:hidden'
        />
        <div className='flex flex-col w-3/4'>
          <h1 className='text-8xl text-purple-800 sm:text-7xl font-bold -mt-52 text-shadow'>
            {t('h1')}
          </h1>
          <p className='text-purple-700 text-2xl'>{t('p')}</p>
          <div className='mt-11 text-5xl text-white'>
            <span className='font-semibold text-green-400'>Pix:</span> donate@menherabot.xyz
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
