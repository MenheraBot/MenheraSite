import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { GetStaticProps } from 'next';
import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';
import { ErrorView } from '../components/ErrorView';
import { useTranslation } from 'next-i18next';

const CustomErrorPage = (): JSX.Element => {
  const { t } = useTranslation('errors');
  return (
    <>
      <Header />
      <main className='mx-auto max-w-7xl p-6 text-center flex flex-col items-center '>
        <ErrorView statusCode={500} title={t('500.title')} text={t('500.description')} />
      </main>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['errors', 'header', 'footer'])),
    },
  };
};

export default CustomErrorPage;
