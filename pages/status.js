import { useEffect, useState } from 'react';
import CacheManager from '../database/cacheManager';
import Head from '../components/head';
import Table from '../components/pingTable';
import Cmds from '../components/disabledCommands';
import style from '../styles/pages/status.module.css';
import Footer from '../components/footer';
import Header from '../components/header';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

const Status = () => {
  const { t } = useTranslation('status');
  const [ping, setPing] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const statusData = await CacheManager.getStatus();

      const apiPing = statusData.filter((a) => a._id.length >= 3);
      const shardsPing = statusData.filter((a) => a._id.length < 3);

      const totalArray = [...apiPing, ...shardsPing];

      setPing(totalArray);
    };

    fetchData();
    setInterval(fetchData, 30000);
  }, []);

  return (
    <div>
      <Head title={t('title')} favicon='assets/favicon.png' />
      <Header />
      <section className={style.container}>
        <h1 className={style.title}>Status</h1>

        <h1 className={ping.length > 0 ? style.none : style.wait}>{t('wait')}</h1>
        <Table pings={ping} />
        {ping.map((a) => {
          if (a._id === 'main') return <Cmds cmds={a.disabledCommands} />;
        })}
      </section>
      <Footer />
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['status', 'header', 'footer'])),
      // Will be passed to the page component as props
    },
  };
}

export default Status;
