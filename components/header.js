import style from '../styles/components/header.module.css';
import { withTranslation } from '../services/i18n'
import { useState } from 'react';
import { add_bot_url } from '../database/constants.json'
import { useRouter } from 'next/router'

const Header = ({ t, i18n }) => {
  const router = useRouter()
  const [lang, setLang] = useState(i18n.language)

  const changeLang = () => {
    i18n.changeLanguage(lang === 'en' ? 'pt' : 'en')
    setLang(lang === 'en' ? 'pt' : 'en')
  }

  return (
    <header className={style.header}>
      <a href="/" id={style.home}><img src="assets/logo.png" /></a>
      <nav>
        <ul className={style.links}>
          <li className={router.pathname === '/comandos' ? style.currentPageTitle : ''}><a href="/comandos">{t('commands')}</a></li>
          {/*  <li className={currentPage === 'boleham' ? style.currentPageTitle : ''}><a href="/boleham">Roleplay</a></li> */}
          <li className={router.pathname === '/status' ? style.currentPageTitle : ''}><a href="/status">Status</a></li>
        </ul>
      </nav>
      <button id={style.lbtn} onClick={changeLang}>{lang == 'en' ? <img className={style.emoji} src="assets/eua.png" /> : <img className={style.emoji} src="assets/br.png" />}</button>
      <a id={style.add} href={add_bot_url}><button>{t('add')}</button></a>
    </header>
  )
}

export default withTranslation('header')(Header)
