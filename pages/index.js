import Layout from '../components/default_layout'

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

          <div className="grid">
            <a href="https://discord.com/api/oauth2/authorize?client_id=708014856711962654&permissions=1007025271&scope=bot" className="card">
              <h3><center><img src="/icons/please.gif" className="icon" width="64" /></center>Adicionar</h3>
              <p>Clique aqui para adicionar a Menhera em um servidor.</p>
            </a>

            <a href="https://discord.gg/fZMdQbA" className="card">
              <h3><center><img src="/icons/discord.png" className="icon" width="64" /></center>Servidor de Suporte</h3>
              <p>Clique aqui para entrar no servidor de suporte da Menhera.</p>
            </a>

            <a href="https://top.gg/bot/708014856711962654/vote" className="card">
              <h3><center><img src="/icons/topgg.png" className="icon" width="48" /></center>Vote em Mim</h3>
              <p>Clique aqui para votar em mim. Votos ajudam na divulgação.</p>
            </a>

            <a href="https://github.com/ySnoopyDogy/MenheraBot" className="card">
              <h3><center><img src="/icons/github.svg" className="icon" width="64" /></center>Código Fonte</h3>
              <p>Clique aqui para ir diretamente para meu respositório no GitHub.</p>
            </a>
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

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 1000px;
          margin-top: 3rem;
        }

        .icon {
          position: flex;
          justify-content: left;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          background-size: cover;
          width: 100%;
          height: 100%;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease, 0.15s;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #9c5ddb;
          border-color: #9c5ddb;
          transition: 0.15s;
          border-radius: 25px;
          border: 3px solid;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
          text-align: center;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
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