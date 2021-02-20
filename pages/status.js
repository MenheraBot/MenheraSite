import { withTranslation } from '../services/i18n'
import { useEffect, useState } from 'react'
import { getStatus } from '../services/api'
import Head from '../components/head'
import Header from '../components/header'
import Table from '../components/pingTable'
import Cmds from '../components/disabledCommands'
import style from '../styles/pages/status.module.css'
import Footer from '../components/footer'

const Status = ({ t }) => {

  const [ping, setPing] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getStatus()
      setPing(data)
    }

    fetchData();
  }, []);

  return (
    <div>
      <Head title={t('title')} favicon="assets/favicon.png" />
      <Header currentPage="status" />

      <section className={style.container}>
      <h1 className={style.title}>Status</h1>
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

