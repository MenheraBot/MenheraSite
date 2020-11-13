import Layout from '../components/default_layout'

export default function Home() {
  return (

    <Layout>


      <div className="container">
        <header>
          <div className="inner-header">
            <a href="/classes">Classes</a>
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

        <style jsx>{`
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
          margin-right: 50px;
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
        }
      `}</style>
      </div>
    </Layout>
  )
}