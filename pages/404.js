import style from "../styles/error.module.css";
import Head from '../components/head'

export default function Custom404() {
  return (
    <div className={style.box}>
      <Head title="Página não encontrada | Menhera's Site" favicon="/assets/icon404.png" />
      <img src="/assets/404.png" />

      <h1><span>404</span><div id={style.responsive}> - Página não encontrada<br /></div>
        <h3><center><p>Eu não sei o que tu procuras,<br />mas certamente não está aqui...</p></center>
          <p><br />
            <a href="/"><b>Voltar para o início </b></a>
          </p>
        </h3>
      </h1>
    </div>
  )
}
