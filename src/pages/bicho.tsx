import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { SectionDivider } from '../components/common/SectionDivider';
import Layout from '../components/PageLayout';
import { getBichoGames } from '../services/api/api';
import { BichoGame } from '../services/api/api.types';
import { useState } from 'react';
import BichoGameDisplay from '../components/BichoGameDisplay';

const BICHO_HOURS_DURATION = 6;
const INITIAL_BICHO_PAGE = 1;

type Props = {
  games: BichoGame[];
  page: number;
  locale: string;
};

const BichoPage = (props: Props): JSX.Element => {
  const { t } = useTranslation('bicho');

  const [games, setGames] = useState(props.games);

  return (
    <Layout page='bicho'>
      <main className='container p-6 mx-auto max-w-7xl  mb-10'>
        <SectionDivider title={t('bicho')} withoutSpace className='mb-10' />
        <h1 className='text-white font-bold text-3xl md:text-4xl mb-3'>
          {t('title')}
          <span className='text-primary'>{' >,...,<'}</span>
        </h1>
        <p className='text-describe text-xl'>{t('description', { time: BICHO_HOURS_DURATION })}</p>
        {games.length > 0 ? (
          <BichoGameDisplay games={games} locale={props.locale} />
        ) : (
          <div className='bg-secondary-bg rounded-2xl my-11 py-11 px-4 mb-6 flex-1'>
            <p className='text-describe text-xl'>{t('no-games', { page: props.page })}</p>
          </div>
        )}
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
  const games = await getBichoGames(INITIAL_BICHO_PAGE);

  const toRevalidate =
    BICHO_HOURS_DURATION * 3600 - Math.floor((Date.now() - (games[0]?.date ?? Date.now())) / 1000);

  return {
    props: {
      games,
      page: INITIAL_BICHO_PAGE,
      locale: locale ?? 'pt-BR',
      ...(await serverSideTranslations(locale ?? 'pt-BR', ['bicho', 'header', 'footer'])),
    },
    revalidate: toRevalidate - 5 > 2 ? toRevalidate - 5 : 2,
  };
};

export default BichoPage;
