import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { Header } from '../components/common/Header';
import { HiCheck, HiStar } from 'react-icons/hi';
import { Button } from '../components/common/Button';
import Image from 'next/image';
import classnames from 'classnames';

const features = [
  'Diversão garantida',
  'N/A permissão necessária',
  'Facilidade de uso',
  'Batalhas em Tempo Real',
];

const ranking = Array.from({ length: 10 }).map((_, i) => ({
  username: 'Luxanna',
  position: i + 1,
  type: 'Anjo',
  hash: 'Luxanna#5757',
}));

const commandsCategories = [
  {
    name: 'Acões',
    id: 'actions',
    description:
      'Está pensando em alguém? Quer abraçar aquele seu crush? E o principal, quer “MAMAR” alguém? Hehe, aqui tudo isso é possível, com mais de 20 ações diferentes.',
    Icon: HiStar,
  },
  {
    name: 'Economia',
    id: 'economy',
    description:
      'O mercado que rotaciona o Dinheiro da Menhera, as Estrelinhas. Aqui tu pode apostar no jogo do Bicho, BlackJack e outros para movimentar suas economias.',
    Icon: HiStar,
  },
  {
    name: 'Diversão',
    id: 'fun',
    description:
      'Com esses comandos tu pode dizer que macetava aquele seu amigo, casar e fazer trisal com aquele pessoal querido. Confira esses e muitos outros.',
    Icon: HiStar,
  },
  {
    name: 'RPG',
    id: 'fun',
    description:
      'O mundo de Boleham é um lugar misterioso e cheio de magia, aqui tu pode ser um entre 12 classes e 8 raças diferentes para se aventurar.',
    Icon: HiStar,
  },
];

interface SectionDividerProps {
  title?: string;
  className?: string;
}

const SectionDivider = ({ className = '', title }: SectionDividerProps): JSX.Element => {
  return (
    <div
      className={classnames(
        'flex items-center gap-2 p-6 container mx-auto min-h-fit md:p-0 md:my-28 ',
        className,
      )}
    >
      {title && <span className='text-primary font-bold'>{title}</span>}
      <div className='bg-secondary-bg h-1 flex-1 px-2' />
    </div>
  );
};

const HomePage = (): JSX.Element => {
  return (
    <>
      <Header />
      <main className='mx-auto max-w-7xl'>
        <section id='descritpion' className='flex-1 flex p-6 container mx-auto min-h-fit'>
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
        <SectionDivider className='hidden md:flex' />
        <section id='ranking-week' className='relative flex flex-row items-center'>
          <div className='hidden md:block absolute h-3/4 w-56 -z-20'>
            <Image src='/home-section-2-menhera.png' layout='fill' alt='Menhera de olho em você!' />
          </div>
          <div className='bg-secondary-bg md:ml-20 px-6 py-8 md:flex justify-around items-center flex-1'>
            <div className='max-w-lg md:max-w-md'>
              <small className='flex items-center gap-2'>
                <span className='text-primary font-bold'>#Rank Semanal</span>
                <div className='bg-separate-color h-1 flex-1 px-2' />
              </small>
              <h1 className='text-white font-bold text-3xl md:text-5xl mt-4'>
                Veja os maiores caçadores.
              </h1>
              <p className='text-describe text-base mt-4'>
                Eu possuo um sistema de caças, onde jogadores podem caçar demonios, anjos, arcanjos,
                semideuses e deuses. Aqui estão os melhores caçadores da Semana!
              </p>
            </div>
            <ul className='mt-6 overflow-auto h-full max-h-72 w-full max-w-lg'>
              {ranking.map((user, index) => (
                <li
                  key={index}
                  className='mt-6 first:mt-0 mr-3 pb-4 border-b-2 border-b-separate-color md:mr-10'
                >
                  <span className='text-white font-bold text-base'>{user.type}</span>
                  <div className='flex justify-between mt-4 text-white'>
                    <span className='font-medium'>{user.username}</span>
                    <span className='font-bold'>#{user.position}</span>
                  </div>
                  <span className='font-bold text-primary'>{user.hash}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <SectionDivider title='Comandos' />
        <section className='container mx-auto min-h-fit p-6'>
          <h2 className='text-white font-bold text-4xl md:text-6xl'>
            Conheça os meus comandos <span className='text-primary'>{'>.<'} </span>
          </h2>
          <p className='text-describe font-describe mt-4 md:text-xl'>
            Eu possuo um sistema de caças, onde jogadores podem caçar demonios, anjos, arcanjos,
            semideuses e deuses. Aqui estão os melhores caçadores da Semana!
          </p>
          <div className='my-6 flex gap-10 flex-wrap justify-between'>
            {commandsCategories.map((category) => (
              <div key={category.id} className='max-w-lg'>
                {<category.Icon color='#975AFF' size={25} />}
                <h3 className='text-white font-bold text-xl md:text-2xl my-4'>
                  Category: <span className='text-primary'>{category.name}</span>
                </h3>
                <p className='text-describe font-describe text-base mb-6'>{category.description}</p>
                <Button>Confira agora</Button>
              </div>
            ))}
          </div>
          <h4 className='text-xl font-bold text-white text-center my-16'>Ver lista completa</h4>
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
