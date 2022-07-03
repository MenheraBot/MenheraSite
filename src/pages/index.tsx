import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { Header } from '../components/common/Header';
import { HiCheck, HiStar, HiOutlineEmojiHappy } from 'react-icons/hi';
import { IoIosArrowDown } from 'react-icons/io';
import { RiSwordLine } from 'react-icons/ri';
import { FaRegKissWinkHeart } from 'react-icons/fa';
import { Button } from '../components/common/Button';
import Image from 'next/image';
import { Footer } from '../components/common/Footer';
import { SectionDivider } from '../components/common/SectionDivider';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

const ranking = Array.from({ length: 10 }).map((_, i) => ({
  hunted: Math.floor(Math.random() * 30),
  position: i + 1,
  huntType: 'angels' as const,
  tag: 'AAAADSDSDVCDSRSDCSDCFSFCFSFCSFFS#5757',
}));

const useCategories = () => {
  const { t } = useTranslation('index');

  const commandsCategories = [
    {
      name: t('categories.actions'),
      id: 'actions',
      description: t('categories.actions-description'),
      Icon: FaRegKissWinkHeart,
    },
    {
      name: t('categories.economy'),
      id: 'economy',
      description: t('categories.economy-description'),
      Icon: HiStar,
    },
    {
      name: t('categories.fun'),
      id: 'fun',
      description: t('categories.fun-description'),
      Icon: HiOutlineEmojiHappy,
    },
    {
      name: t('categories.rpg'),
      id: 'roleplay',
      description: t('categories.rpg-description'),
      Icon: RiSwordLine,
    },
  ];

  return commandsCategories;
};

const useFeatures = () => {
  const { t } = useTranslation('index');

  const features = [
    t('features.facility'),
    t('features.funny'),
    t('features.battle'),
    t('features.permissions'),
  ];

  return features;
};

const HomePage = (): JSX.Element => {
  const { t } = useTranslation('index');
  const features = useFeatures();
  const categories = useCategories();

  return (
    <>
      <Header />
      <main>
        <section id='descritpion' className='flex-1 flex p-6 container min-h-fit mx-auto max-w-7xl'>
          <div className='md:max-w-xl'>
            <h1 className='text-white mt-6 font-bold text-4xl md:text-5xl'>
              {t('greetings')} <span className='text-primary'>Menhera Bot</span>
            </h1>
            <p className='mt-4 font-describe text-describe text-base md:text-xl'>
              {t('mission')}
              <Link href='/commands' passHref>
                <span className='text-primary cursor-pointer'> {t('here')}</span>
              </Link>
              .
            </p>
            <ul className='grid grid-cols-2 my-6 gap-2'>
              {features.map((feature, index) => (
                <li key={index} className='text-white text-xs font-bold flex gap-3'>
                  <HiCheck color='#38FF40' /> {feature}
                </li>
              ))}
            </ul>
            <a href='/invite' target='_blank'>
              <Button>{t('invite')}</Button>
            </a>
          </div>
          <div className='hidden flex-1 lg:flex justify-center items-center gap-4'>
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
          <IoIosArrowDown
            className='text-primary bottom animate-bounce absolute hidden md:block inset-x-1/2 bottom-0'
            size={50}
          />
        </section>
        <SectionDivider className='hidden md:flex' />
        <section
          id='ranking-week'
          className='relative flex flex-row items-center mx-auto max-w-7xl'
        >
          <div className='hidden md:block absolute h-3/4 w-56'>
            <Image src='/home-section-2-menhera.png' layout='fill' alt='Menhera de olho em você!' />
          </div>
          <div className='bg-secondary-bg md:ml-20 px-6 py-8 md:flex gap-3 justify-around items-center flex-1'>
            <div className='max-w-max shrink md:max-w-md'>
              <small className='flex items-center gap-2'>
                <span className='text-primary font-bold'>{t('weekly-ranking')}</span>
                <div className='bg-separate-color h-1 flex-1 px-2' />
              </small>
              <h1 className='text-white font-bold text-3xl md:text-5xl mt-4'>
                {t('best-hunters')}
              </h1>
              <p className='text-describe text-base mt-4'>{t('ranking-description')}</p>
            </div>
            <ul className='mt-6 overflow-auto h-full max-h-72 w-full max-w-full md:max-w-lg flex-none lg:flex-1'>
              {ranking.map((user, index) => (
                <li
                  key={`${user.tag}-${index}`}
                  className='mt-6 first:mt-0 mr-3 pb-4 border-b-2 border-b-separate-color md:mr-10'
                >
                  <span className='text-white capitalize font-bold text-base'>
                    {t(`huntTypes.${user.huntType}`)}
                  </span>
                  <div className='flex justify-between mt-4 text-white'>
                    <span className='font-medium'>{user.tag}</span>
                    <span className='font-bold'>#{user.position}</span>
                  </div>
                  <span className='font-bold text-primary'>
                    {t('hunted', { amount: user.hunted, type: user.huntType })}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <SectionDivider title={t('commands')} />
        <section className='container min-h-fit p-6 mx-auto max-w-7xl'>
          <h2 className='text-white font-bold text-4xl md:text-6xl'>
            {t('findout')} <span className='text-primary'>{'>.<'} </span>
          </h2>
          <p className='text-describe font-describe mt-4 md:text-xl'>{t('findout-description')}</p>
          <div className='my-6 flex gap-10 flex-wrap justify-between'>
            {categories.map((category) => (
              <div key={category.id} className='max-w-lg'>
                {<category.Icon color='#975AFF' size={25} />}
                <h3 className='text-white font-bold text-xl lg:text-2xl my-4'>
                  {t('category')} <span className='text-primary'>{category.name}</span>
                </h3>
                <p className='text-describe font-describe text-base mb-6 md:max-w-sm lg:max-w-md'>
                  {category.description}
                </p>
                <Link
                  href={{
                    pathname: '/commands',
                    hash: `#table`,
                    query: { category: category.id },
                  }}
                  passHref
                >
                  <Button>{t('see-commands')}</Button>
                </Link>
              </div>
            ))}
          </div>
        </section>
        <section className='relative h-full w-full'>
          <Image
            src='/home-section-4-bg.png'
            layout='fill'
            alt='Discord'
            className='-z-10 bg-contain sm:block hidden'
          />
          <Image
            src='/home-section-4-bg-mobile.png'
            layout='fill'
            alt='Discord'
            className='-z-10 bg-contain sm:hidden block'
          />
          <div className='p-6 lg:p-0 mx-auto max-w-7xl flex justify-between relative'>
            <div className='md:py-6'>
              <h1 className='text-white font-bold text-4xl md:text-6xl'>
                {t('add-me.first')} <span className='text-primary'>{t('add-me.second')}</span>{' '}
                {t('add-me.third')}
              </h1>
              <p className='text-describe font-describe mt-4 mb-6 md:text-xl max-w-3xl'>
                {t('add-me.description')}
              </p>
              <a href='/invite' target='_blank'>
                <Button>{t('add-me.add')}</Button>
              </a>
            </div>
            <Image
              className='hidden lg:block absolute h-full right-0'
              src='/menhera-de-fone.svg'
              height={336}
              width={264}
              alt='Discord'
            />
          </div>
        </section>
        <section className='container min-h-fit px-6 pt-6 mx-auto max-w-7xl flex items-center justify-between'>
          <div className='hidden md:block -mb-3 -z-10'>
            <Image src='/menhera-piscando.png' width='374' height='390' alt='Menhera piscando!' />
          </div>
          <div>
            <SectionDivider title={t('about-me')} withoutSpace className='mb-6' />
            <h1 className='text-white font-bold text-4xl md:text-6xl'>{t('know-me-better')}</h1>
            <p className='text-describe font-describe mt-4 mb-6 md:text-xl max-w-3xl'>
              {t('know-me-description')}
            </p>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['index', 'header', 'footer'])),
    },
  };
};

export default HomePage;
