import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';

const NotFoundPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <div className='mx-auto max-w-7xl p-6 my-10 text-center flex flex-col items-center '>
        <span className='text-primary text-3xl font-bold md:text-7xl'>404</span>
        <h1 className='text-white text-3xl font-bold mt-4 mb-6'>
          Oops! Esta página não está disponível <span className='text-primary'>:(</span>
        </h1>
        <p className='text-describe text-xl max-w-2xl'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro assumenda delectus placeat
          animi, eligendi quas nam perspiciatis, facere corporis aliquam magni ullam ad dolor
          inventore omnis quia maxime distinctio aut!
        </p>
      </div>
      <Footer />
    </>
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
