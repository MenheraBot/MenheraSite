import style from '../styles/pages/error.module.css';
import Head from '../components/head';
import Footer from '../components/footer';
import Header from '../components/header';
import i18n from '../services/i18n';
import Link from 'next/link';

const Custom500 = ({ t }) => (
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

Custom500.getInitialProps = async () => ({
  namespacesRequired: ['error', 'header', 'footer'],
});

export default i18n.withTranslation('error')(Custom500);
