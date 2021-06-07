import { withTranslation } from '../services/i18n'
import { useEffect, useState } from 'react'
import CacheManager from '../database/cacheManager'
import Head from '../components/head'
import Table from '../components/pingTable'
import Cmds from '../components/disabledCommands'
import style from '../styles/pages/status.module.css'

const Status = ({ t }) => {

  const [ping, setPing] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const statusData = await CacheManager.getStatus();
      console.log(statusData)

      const apiPing = statusData.filter(a => a._id.length >= 3)
      const shardsPing = statusData.filter(a => a._id.length < 3)

      const totalArray = [...apiPing, ...shardsPing]

      setPing(totalArray);
    }

    fetchData();
  }, []);

  return (
    <div>
      <Head title={t('title')} favicon="assets/favicon.png" />
      <section className={style.container}>

        <h1 className={style.title}>Status</h1>

        <h1 className={(ping.length > 0) ? style.none : style.wait}>{t('wait')}</h1>
        <Table pings={ping} />
        {ping.map(a => {
          if (a._id === 'main') return (<Cmds cmds={a.disabledCommands} />)
        })}
        <iframe src="https://menherabot.instatus.com/embed-status/dark-lg" width="245" height="61"
          frameBorder="0" scrolling="no" style="border: none;" ></iframe>
      </section>
    </div>
  )
}

Status.getInitialProps = async () => ({
  namespacesRequired: ['status', 'header', 'footer'],
})

export default withTranslation('status')(Status)

