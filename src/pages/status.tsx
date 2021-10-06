import { fetchCommands, fetchStatus } from '../services/api/api';
import Head from '../components/head';
import Table from '../components/ping-table';
import Cmds from '../components/disabled-commands';
import style from '../styles/pages/status.module.css';
import Footer from '../components/footer';
import Header from '../components/header';
import { useTranslation } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { Command, Shard } from '../services/api/api.types';

type Props = {
  shards: Shard[];
  disabledCommands: Command[];
};

const StatusPage = ({ disabledCommands, shards }: Props): JSX.Element => {
  const { t } = useTranslation('status');

  return (
    <div>
      <Head title={t('title')} favicon='assets/favicon.png' />
      <Header />
      <section className={style.container}>
        <h1 className={style.title}>Status</h1>

        <h1 className={shards.length > 0 ? style.none : style.wait}>{t('wait')}</h1>
        {shards.length > 0 && <Table pings={shards} />}
        {disabledCommands.length > 0 && <Cmds cmds={disabledCommands} />}
      </section>
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
  const shards = await fetchStatus();
  const commands = await fetchCommands();

  return {
    props: {
      ...(await serverSideTranslations(locale, ['status', 'common', 'header', 'footer'])),
      shards: shards.map((a) => ({ ...a, isOff: a.lastPingAt < Date.now() - 70000 })),
      disabledCommands: commands.filter((c) => c.disabled?.isDisabled),
    },
    revalidate: 15,
  };
};

export default StatusPage;
