import style from '../styles/components/maintenance.module.css';
import Head from './head'

export default function Header() {
  return (
    <div className={style.container}>
    <Head title="Manutenção | Menhera's Site" favicon="assets/icon404.png" />
      <img src="assets/sorry.png" />
      <h1>🚧 Está página está indisponível 🚧</h1>
      <p>Desculpe, mas esta página encontra-se em manutenção atualmente :(</p>
      <a href="/"><b>Voltar para o início</b></a>
    </div>
  )
}
