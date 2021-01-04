import Main from '../components/head';
import Header from '../components/header';
import Footer from '../components/footer';
import style from '../styles/pages/index.module.css';

export default function Home() {
  return (
    <div>
      <Main title="Menhera's Site" favicon="assets/favicon.png" />
      <Header />
      <div className={style.container}>
        <div className={style.banner}>
          <div className={style.menhera_img}>
            <img src="assets/men.png" />
          </div>
          <div className={style.menhera_text}>
            <h1>Olá, meu nome é Menhera Bot</h1>
            <p>Sou um bot com foco em Diversão e RPG. Tenho 16 anos, e amo, mas tipo, amo MUITO essas carinhas '&gt;.&lt;'. Eu existo para deixar seu servidor um ambiente mais divertido para conversar, animando o povo com jogos de azar, o mundo de Boleham para explorar, e claro que não podia faltar, memes para zoar. Adicione-me em seu servidor para alegrar a gurizada.</p>
            <br />
            <a href="https://discord.com/api/oauth2/authorize?client_id=708014856711962654&permissions=1007025271&scope=bot"><button><b>Clique para me adicionar</b></button></a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
