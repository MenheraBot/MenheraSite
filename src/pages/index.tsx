import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { Header } from '../components/common/Header';
import { HiCheck } from 'react-icons/hi';
import { Button } from '../components/common/Button';
import Image from 'next/image';

const features = [
  'Diversão garantida',
  'N/A permissão necessária',
  'Facilidade de uso',
  'Batalhas em Tempo Real',
];

const HomePage = (): JSX.Element => {
  return (
    <>
      <Header />
      <main className='p-6 mx-auto max-w-7xl'>
        <section className='flex-1 flex container mx-auto min-h-fit'>
          <div className='md:max-w-xl'>
            <h1 className='text-white mt-6 font-bold text-4xl md:text-5xl'>
              Yahoy, eu sou a <span className='text-primary'>Menhera BOT</span> {'>.<'}{' '}
            </h1>
            <p className='mt-4 font-describe text-describe text-base md:text-xl'>
              Minha missão é divertir o teu servidor com diversas funcionalidades que tu podes ver
              <a className='text-primary'> aqui</a>.
            </p>
            <ul className='grid grid-cols-2 my-6 gap-2'>
              {features.map((feature, index) => (
                <li key={index} className='text-white text-xs font-bold flex gap-3'>
                  <HiCheck color='#38FF40' /> {feature}
                </li>
              ))}
            </ul>
            <Button>Lorem Ipsum</Button>
          </div>
          <div className='hidden flex-1 md:flex justify-center items-center gap-4'>
            <Image
              src='/home-section-1.png'
              width={150}
              height={400}
              layout='intrinsic'
              alt='Menhera comendo pipica'
            />
            <Image
              src='/home-section-1.png'
              width={150}
              height={500}
              layout='intrinsic'
              alt='Menhera comendo pipica'
            />
            <Image
              src='/home-section-1.png'
              width={150}
              height={400}
              layout='intrinsic'
              alt='Menhera comendo pipica'
            />
          </div>
        </section>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common', 'header', 'footer'])),
    },
  };
};

export default HomePage;
