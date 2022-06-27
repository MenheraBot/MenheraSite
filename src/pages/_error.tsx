import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { GetStaticProps } from 'next';
import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';
import { ErrorView } from '../components/ErrorView';

const CustomErrorPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <main className='mx-auto max-w-7xl p-6 text-center flex flex-col items-center '>
        <ErrorView
          statusCode={500}
          title='Oops! Algo deu errado'
          text=' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro assumenda delectus placeat
          animi, eligendi quas nam perspiciatis, facere corporis aliquam magni ullam ad dolor
          inventore omnis quia maxime distinctio aut!'
        />
      </main>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['header', 'footer'])),
    },
  };
};

export default CustomErrorPage;
