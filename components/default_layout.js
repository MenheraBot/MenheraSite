import Head from 'next/head'

import style from '../styles/default_layout.module.css'

export default function Layout({
  children,
  title = "Menhera's Site",
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon/favicon.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Menhera's Site" key="title" />
        <meta charSet="utf-8" />
      </Head>
     {/*  <header className={style.header}>
        <nav className={style.nav}>
        <div className={style.logo_container}>
        <a href="/">
        <img src="/icons/logo.png" alt="logo" />
        </a>
        </div>
          <ul className={style.navigation}>
            <a href="/about"><li>About</li></a>
            <a href="/amanda"><li>Amanda</li></a>
          </ul>
        </nav>
      </header> */}

      {children}

      <footer className={style.footer}>
        <a href="https://github.com/ySnoopyDogy/MenheraBot" target="_blank" rel="noopener noreferrer">
          Menhera foi feita com <div id={style.heart}> ❤️ </div> por Luxanna
        </a>
      </footer>
    </div>
  )
}