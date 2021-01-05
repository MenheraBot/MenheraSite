import style from '../styles/components/header.module.css';

export default function Header({ currentPage }) {
  return (
    <header className={style.header}>
      <a href="/" id={style.home}><img src="assets/logo.png" /></a>
      <nav>
        <ul className={style.links}>
          <li className={currentPage === 'commands' ? style.currentPageTitle : ''}><a href="/comandos">Comandos</a></li>
          <li className={currentPage === 'boleham' ? style.currentPageTitle : ''}><a href="/boleham">Roleplay</a></li>
          <li className={currentPage === 'status' ? style.currentPageTitle : ''}><a href="/status">Status</a></li>
        </ul>
      </nav>
      <a href="https://discord.com/api/oauth2/authorize?client_id=708014856711962654&permissions=1007025271&scope=bot"><button>Adicionar</button></a>
    </header>
  )
}
