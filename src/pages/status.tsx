import { fetchCommands, fetchStatus } from '../services/api/api';

import Cmds from '../components/disabled-commands';
import style from '../styles/pages/status.module.css';
import { BsPerson } from 'react-icons/bs';
import { FiServer } from 'react-icons/fi';
import { MdMemory } from 'react-icons/md';
import { AiOutlineCluster } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { Command, ShardData } from '../services/api/api.types';
import Layout from '../components/ui/layout';
import { Box, SimpleGrid } from '@chakra-ui/react';
import { StatisticCard, ShardInfo } from '../components/shard-info';
import { useEffect, useState } from 'react';

type Props = {
  lang: string;
  disabledCommands: Command[];
};

const StatusPage = ({ lang, disabledCommands }: Props): JSX.Element => {
  const [shards, setShards] = useState<ShardData[]>([]);

  const updateShardData = () => {
    fetchStatus().then((shards) =>
      setShards(
        shards.map((a) => ({
          ...a,
          isOff: a.lastPingAt < Date.now() - 25_000,
        })),
      ),
    );
  };

  useEffect(() => {
    updateShardData();

    const interval = setInterval(() => {
      updateShardData();
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const { t } = useTranslation('status');

  return (
    <Layout title={t('title')}>
      <section className={style.container}>
        <h1 className={style.title}>Status</h1>
        <h1 className={shards.length > 0 ? style.none : style.wait}>{t('wait')}</h1>
        <Box maxW='7xl' mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 5, lg: 8 }}>
            <StatisticCard
              title={t('total-members')}
              stat={shards.reduce((p, c) => p + c.members, 0)}
              icon={<BsPerson size={'3em'} />}
            />
            <StatisticCard
              title={t('guilds')}
              stat={shards.reduce((p, c) => p + c.guilds, 0)}
              icon={<FiServer size={'3em'} />}
            />
            <StatisticCard
              title={t('total-clusters')}
              stat={shards.length > 0 ? shards[shards.length - 1].clusterId + 1 : 0}
              icon={<AiOutlineCluster size={'3em'} />}
            />
            <StatisticCard
              title={t('total-memory')}
              stat={`${shards.length > 0 ? (shards[0].memoryUsed / 1024 / 1024).toFixed(2) : 0}`}
              icon={<MdMemory size={'3em'} />}
            />
          </SimpleGrid>
        </Box>
        <Box maxW='7xl' mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
          <SimpleGrid
            columns={{
              base: 4,
              md: 8,
              lg: 10,
            }}
            spacing={{ base: 5, lg: 8 }}
            my={'50px'}
          >
            {shards.length > 0 && shards.map((a) => <ShardInfo key={a.id} shard={a} t={t} />)}
          </SimpleGrid>
        </Box>
        {disabledCommands.length > 0 && <Cmds cmds={disabledCommands} lang={lang} />}
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
  const commands = await fetchCommands();

  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['status', 'common', 'header', 'footer'])),
      lang: locale ?? 'en',
      disabledCommands: commands.filter((c) => c.disabled?.isDisabled),
    },
    revalidate: 60,
  };
};

export default StatusPage;
