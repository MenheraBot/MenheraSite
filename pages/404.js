import Head from "next/head";
import style from "../styles/error.module.css";

export default function Custom404() {
  return (
    <div className={style.box}>
      <Head>
        <title>404 - Página não encontrada</title>
        <link rel="icon" href="/assets/favicon.png" />
      </Head>
      <img src="/assets/404.png" />
      <h1><span>404</span> - Página não encontrada<br />
        <h3>
          Eu não sei o que tu procuras, <br />
        mas certamente não está aqui...
        <p>
            <a href="/"><b>Voltar para o início </b></a>
          </p>
        </h3>
      </h1>
    </div>
  )
}
