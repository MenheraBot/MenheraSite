import { useEffect, useState } from 'react';
import CacheManager from '../database/cacheManager';
import Head from '../components/head';
import Table from '../components/pingTable';
import Cmds from '../components/disabledCommands';
import style from '../styles/pages/status.module.css';
import Footer from '../components/footer';
import Header from '../components/header';
import { useTranslation } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';

const StatusPage = (): JSX.Element => {
  const { t } = useTranslation('status');
  const captalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const [ping, setPing] = useState([]);
  const [disabled, setDisabled] = useState([]);
  let interval;

  useEffect(() => {
    CacheManager.getCommands().then((res) => {
      const reduced = res.reduce((p, c) => {
        if (c.disabled?.isDisabled) p.push({ name: captalize(c.name), reason: c.disabled.reason });
        return p;
      }, []);
      setDisabled(reduced);
    });
    const fetchData = async () => {
      const statusData = await CacheManager.getStatus();

      setPing(statusData);
    };

    fetchData();
    interval = setInterval(fetchData, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Head title={t('title')} favicon='assets/favicon.png' />
      <Header />
      <section className={style.container}>
        <h1 className={style.title}>Status</h1>

        <h1 className={ping.length > 0 ? style.none : style.wait}>{t('wait')}</h1>
        {ping.length > 0 && <Table pings={ping} />}
        {disabled.length > 0 && <Cmds cmds={disabled} />}
      </section>
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['status', 'header', 'footer'])),
    },
  };
};
export default StatusPage;
