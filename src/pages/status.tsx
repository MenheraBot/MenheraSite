import i18n from '../services/i18n';
import { useEffect, useState } from 'react';
import CacheManager from '../database/cacheManager';
import Head from '../components/head';
import Table from '../components/pingTable';
import Cmds from '../components/disabledCommands';
import style from '../styles/pages/status.module.css';
import Footer from '../components/footer';
import Header from '../components/header';

const Status = ({ t }) => {
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

Status.getInitialProps = async () => ({
  namespacesRequired: ['status', 'header', 'footer'],
});

export default i18n.withTranslation('status')(Status);
