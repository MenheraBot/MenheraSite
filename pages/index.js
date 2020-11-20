import Layout from '../components/default_layout'
import Card from '../components/Card'

export default function Home() {

  return (
    <Layout>
      <div className="container">
        <header>
          <div className="inner-header">
          <ul className="links">
            <a href="#contribute"><li>Contribua</li></a>
            <a href="/classes"><li>Classes</li></a>
            </ul>
          </div>
        </header>
        <main>
          <h1 className="title">
            <img src="/icons/logo.png" alt="Logo" />
                Menhera Bot
            </h1>
          <p className="description">Um bot brasileiro com foco em Diversão e RPG</p>

          <div className="cards">
            <Card
              redirect="https://discord.com/api/oauth2/authorize?client_id=708014856711962654&permissions=1007025271&scope=bot"
              iconPath="/icons/please.gif"
              iconWidth="64"
              title="Adicionar"
              description="Clique aqui para adicionar a Menhera em um servidor."
              />
            <Card
              redirect="https://discord.gg/fZMdQbA"
              iconPath="/icons/discord.png"
              iconWidth="64"
              title="Servidor de Suporte"
              description="Clique aqui para entrar no servidor de suporte da Menhera."
              />
            <Card
              redirect="https://top.gg/bot/708014856711962654/vote"
              iconPath="/icons/topgg.png"
              iconWidth="48"
              title="Vote em Mim"
              description="Clique aqui para votar em mim. Votos ajudam na divulgação."
              />
            <Card
              redirect="https://github.com/ySnoopyDogy/MenheraBot"
              iconPath="/icons/github.svg"
              iconWidth="64"
              title="Código Fonte"
              description="Clique aqui para ir diretamente para meu respositório no GitHub"
              />
          </div>
        </main>
      </div>
      <section id="contribute" className="contribute">
        <div className="contribute-container">
          <h1>Ajude a Menhera</h1>
          <div className="contribute-text">
            <p>Oi gente, meu nome é Lux, e eu sou a dona da Menhera. Pra quem não sabe, eu tenho 16 anos e pago a hospedagem da Menhera sozinha. Eu não trabalho kekw, então a Menhera é 100% por meu dinheiro, por isso, criei uma forma para quem puder e quiser ajudar meu trabalho, pode usar o PicPay para doar money 💸</p>
          </div>
          <ul className="donation">
            <div className="li_buttom"><a href="https://picpay.me/ySnoopyDogy"><li>Link para doar</li></a></div>
            <li><img src="./icons/QRCode.jpeg" /></li>
            <div className="li_buttom"><a href='https://ko-fi.com/ysnoopydogy'><li>Compre-me um café</li></a></div>
            <div className="li_buttom"><li>Meu usuário do PicPay: <span className="user">@ySnoopyDogy</span></li></div>
          </ul>
        </div>
      </section>



      <style jsx>{`

        .contribute {
          justify-content: center;
          min-height: 100vh;
        }

        .user {
          font-size: 1.7rem;
          color: lightgreen;
        }

        .links li{
          text-decoration: none;
          display: table-cell;
        }

        .links {
          text-decoration: none;
        }

        .donation {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .li_buttom a {
          color: inherit;
          text-decoration: none;
        }

        .li_buttom {
          border: 1px solid #eaeaea;
          border-radius: 15px;
          transition: color 0.15s ease, border-color 0.15s ease, 0.15s;
          margin-right: 5px;
        }

        .li_buttom:hover,
        .li_buttom:focus,
        .li_buttom:active {
          border-color: #9c5ddb;
          border-radius: 15px;
          padding: 5px;
          transition: color 0.15s ease, border-color 0.15s ease, 0.15s;
        }

        .donation li{
          text-decoration: none;
          display: table-cell;
          padding: 20px;
          font-size: 1.3rem;
        }

        .contribute-container h1{
          display: flex;
          justify-content: center;
        }

        .contribute-text{
          float: left;
          font-size: 1.5rem;
          margin-left: 15px;
        }

        .contribute-container {
          margin-top: 20px;
          justify-content: center;
          font-size: 2rem;
        }

        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        header {
          background-color: #222620;
          border-bottom: 1px solid #eaeaea;
          font-decoration: none;
          display: flex;
          width: 100%;
          justify-content: flex-end;
          align-items: center;
          min-height: 70px;
        }

        .inner-header a{
          text-decoration: none;
          align-items: center;
          justify-content: center;
          display: flex;
          float: right;
          width: 100px;
          height: 45px;
          margin-right: 20px;
          margin-bottom: 20px;
          border: 1px solid pink;
          border-radius: 90px;
          background-color: inherit;
          color: inherit;
        }

        .inner-header a:hover{
          background-color: pink;
          color: black;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title img {
          width: 100px;
          height: 100px;
          margin-right: 15px;
          display: flex;
          float: left;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .cards {
          display: grid;
          margin-top: 48px;
          grid-template-columns: 2fr 2fr;
          align-items: space-between;
          flex-wrap: wrap;
          max-width: 10kuem;
        }

        @media (max-width: 1000px) {
          .cards {
            width: 100%;
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .title {
            font-size: 3rem;
          }
          .description {
            font-size: 1.3rem;
          }
          .title img {
            width: 300px;
            height: 300px;
            float: none;
          }
          .donation li{
            flex-direction: column;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          display: flex;
        }
        .donation img {
          display: none;
        }
        }
      `}</style>
    </Layout>
  )
}