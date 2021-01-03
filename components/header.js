import style from '../styles/header.module.css';

export default function Header() {
  return (
    <div>
      <header className={style.header}>
        <a href="/" id={style.home}><img src="assets/logo.png" /></a>
        <nav>
          <ul className={style.links}>
            <li><a href="/comandos">Comandos</a></li>
            <li><a href="/boleham">Roleplay</a></li>
            <li><a href="/status">Status</a></li>
          </ul>
        </nav>
        <a href="https://discord.com/api/oauth2/authorize?client_id=708014856711962654&permissions=1007025271&scope=bot"><button>Adicionar</button></a>
      </header>
    </div>
  )
}
