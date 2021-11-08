import style from '../styles/pages/error.module.css';

import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import { GetStaticProps } from 'next';
import Layout from '../components/ui/layout';

const CustomErrorPage = (): JSX.Element => {
  const { t } = useTranslation('error');

  return (
    <Layout title={t('title')}>
      <div className={style.box}>
        <img src='/assets/404.png' alt='Menhera not found' />
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

export default CustomErrorPage;
