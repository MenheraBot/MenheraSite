import Image from 'next/image';
import Link from 'next/link';
import { Text } from '@chakra-ui/react';

import style from '../styles/pages/donate.module.css';
import { useTranslation } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import Layout from '../components/ui/layout';

const DonatePage = (): JSX.Element => {
  const { t } = useTranslation('donate');

  return (
    <Layout title={t('title')}>
      <div className='flex'>
        <div className='flex w-1/3 text-center'>
          <Image alt='Menhera Crying' src='/assets/cry.png' width={300} height={300} className='' />
        </div>
        <div className='flex-1 text-center'>
          <Text className='text-7xl text-purple-800 sm:text-6xl font-bold text-shadow'>
            {t('h1')}
          </Text>
          <p className='text-purple-700 text-2xl sm:text-lg max-w-2xl mt-4'>{t('p')}</p>
          <div className='my-8 text-5xl sm:text-2xl text-white'>
            <span className='font-semibold text-green-400'>Pix: </span>
            donate@menherabot.xyz
          </div>
          <Text className='font-semibold text-green-400 text-5xl pb-2'>
            <Link href={'https://github.com/sponsors/MenheraBot'}>GitHub Sponsors</Link>
          </Text>
        </div>
      </div>

      {/*  <section className='container mx-auto flex self-center items-center place-self-center justify-center text-center h-screen sm:mt-24'>
          <div className='flex flex-row'>
            <div className='flex flex-col w-3/4 mt-32'>
              <h1 className='text-7xl text-purple-800 sm:text-6xl font-bold -mt-52 text-shadow'>
                {t('h1')}
              </h1>
              <p className='text-purple-700 text-2xl sm:text-lg mt-4'>{t('p')}</p>

              <div className='my-8 text-5xl sm:text-2xl text-white'>
                <span className='font-semibold text-green-400'>Pix: </span>
                donate@menherabot.xyz
              </div>

              <div className='w-2/'>
                <Image alt='Menhera Crying' src='/assets/cry.png' width='300' height='400' />
              </div>
            </div>
          </div>
        </section> */}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common', 'donate', 'header', 'footer'])),
    },
  };
};

export default DonatePage;
