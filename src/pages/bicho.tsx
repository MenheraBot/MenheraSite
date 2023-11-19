import { useTranslation } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { SectionDivider } from '../components/common/SectionDivider';
import Layout from '../components/PageLayout';

const BichoPage = (): JSX.Element => {
  const { t } = useTranslation('bicho');

  return (
    <Layout page='bicho'>
      <main className='container p-6 mx-auto max-w-7xl  mb-10'>
        <SectionDivider title={t('bicho')} withoutSpace className='mb-10' />
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['bicho', 'header', 'footer'])),
    },
  };
};

export default BichoPage;
