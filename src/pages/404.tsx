import style from '../styles/pages/error.module.css';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '../components/ui/layout';

const NotFoundPage = (): JSX.Element => {
  const { t } = useTranslation('error');

  return (
    <Layout title={t('title')}>
      <div className={style.box}>
        <img src='/assets/404.png' alt='Menhera not found' />
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
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['error', 'header', 'footer'])),
    },
  };
};

export default NotFoundPage;
