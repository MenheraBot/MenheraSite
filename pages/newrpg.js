import { withTranslation } from '../services/i18n'
import Head from '../components/head'
import style from '../styles/pages/status.module.css'
import Footer from '../components/footer'
import Header from '../components/header'
import Markdown from 'react-markdown'
import { useState, useEffect } from 'react'
import axios from 'axios';

const NewRpg = ({ t }) => {


  const [data, setData] = useState('Buscando dados')

  useEffect(() => {
    const fetchData = async () => {
      const _data = await axios.get('https://raw.githubusercontent.com/ySnoopyDogy/MenheraBot/boleham/v2/src/structures/Rpgs/README.md')
      setData(_data.data)
    }
    fetchData();
  }, []);

  return (
    <div>
      <Head title={t('title')} favicon="assets/favicon.png" />
      <Header />
      <h1 className={style.title}>Ideias do Novo RPG</h1>

      <Markdown >{data}</Markdown>

      <Footer />
    </div>
  )
}

NewRpg.getInitialProps = async () => ({
  namespacesRequired: ['newrpg', 'header', 'footer'],
})

export default withTranslation('newrpg')(NewRpg)

