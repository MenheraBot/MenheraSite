import { withTranslation } from '../services/i18n'
import { useEffect, useState } from 'react'
import CacheManager from '../database/cacheManager'
import Head from '../components/head'
import Table from '../components/pingTable'
import Cmds from '../components/disabledCommands'
import style from '../styles/pages/status.module.css'
import Footer from '../components/footer'
import Header from '../components/header'

const Status = ({ t }) => {

  const [ping, setPing] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const statusData = await CacheManager.getStatus();

      const apiPing = statusData.filter(a => a._id.length >= 3)
      const shardsPing = statusData.filter(a => a._id.length < 3)

      const totalArray = [...apiPing, ...shardsPing]

      setPing(totalArray);
    }

    fetchData();
    setInterval(fetchData, 30000)
  }, []);

  return (
    <div>
      <Head title={t('title')} favicon="assets/favicon.png" />
      <Header />
      <section className={style.container}>

        <h1 className={style.title}>Status</h1>

        <center><iframe src="https://menherabot.instatus.com/embed-status/dark-sm" width="290" height="60" /></center>

        <h1 className={(ping.length > 0) ? style.none : style.wait}>{t('wait')}</h1>
        <Table pings={ping} />
        {ping.map(a => {
          if (a._id === 'main') return (<Cmds cmds={a.disabledCommands} />)
        })}
      </section>
      <Footer />
    </div>
  )
}

Status.getInitialProps = async () => ({
  namespacesRequired: ['status', 'header', 'footer'],
})

export default withTranslation('status')(Status)

