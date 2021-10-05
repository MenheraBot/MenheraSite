import style from '../styles/pages/error.module.css';
import Head from '../components/head';
import Header from '../components/header';
import Link from 'next/link';
import Footer from '../components/footer';
import i18n from '../services/i18n';

const Custom404 = ({ t }) => (
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

export default i18n.withTranslation('error')(Custom404);
