import { useTranslation } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { SectionDivider } from '../components/common/SectionDivider';
import Layout from '../components/PageLayout';
import { getBichoGames } from '../services/api/api';
import { BichoGame } from '../services/api/api.types';

const BICHO_HOURS_DURATION = 6;

type Props = {
  games: BichoGame[];
};

const BichoPage = ({ games }: Props): JSX.Element => {
  const { t } = useTranslation('bicho');

  return (
    <Layout page='bicho'>
      <main className='container p-6 mx-auto max-w-7xl  mb-10'>
        <SectionDivider title={t('bicho')} withoutSpace className='mb-10' />
        {games.map((a) => JSON.stringify(a))}
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
  const games = await getBichoGames(1);

  const toRevalidate =
    BICHO_HOURS_DURATION * 3600 - Math.floor((Date.now() - games[0].date) / 1000);

  return {
    props: {
      games,
      ...(await serverSideTranslations(locale as string, ['bicho', 'header', 'footer'])),
    },
    revalidate: toRevalidate - 5 > 2 ? toRevalidate - 5 : 2,
  };
};

export default BichoPage;
