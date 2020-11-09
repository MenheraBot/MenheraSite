import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Menhera's Site</title>
        <link rel="icon" href="/favicon/favicon.png" />
      </Head>

      <main>
        <h1 className="title">
          <img src="/icons/logo.png" alt="Menhera Logo" id="mainLogo" />
          Menhera Bot
        </h1>

        <p className="description">
          Um bot brasileiro com foco em Diversão e RPG
        </p>

        <div className="grid">
          <a href="https://Vrau" className="card">
            <h3>Salve fuzer &rarr;</h3>
            <p>Clica aqui pra dar aquela sugadinha em mim.</p>
          </a>

          <a href="https://testezao" className="card">
            <h3>É meme moon &rarr;</h3>
            <p>Eu não vou mamar ele por que eu sei que ele é teu.</p>
          </a>

          <a
            href="https://www.vitoria.linda.gostosa.com.br/manda-pack-da/?type=mão"
            className="card"
          >
            <h3>Mas tipo &rarr;</h3>
            <p>Se a irmã dele quiser, eu quero.</p>
          </a>

          <a
            href="https://www.vitoria.linda.gostosa.com.br/manda-pack-da/?type=mão"
            className="card"
          >
            <h3>PAREI PAREI &rarr;</h3>
            <p>
              Parei o caralho manda ela vir.
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a href="https://github.com/ySnoopyDogy/MenheraBot" target="_blank" rel="noopener noreferrer" >
          Menhera foi feito com ❤️ por Luxanna
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
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
          max-width: 800px;
          margin-top: 3rem;
        }
        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }
        .card:hover,
        .card:focus,
        .card:active {
          color: #9c5ddb;
          border-color: #9c5ddb;
        }
        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }
        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }
        #mainLogo {
          height: 1em;
          padding-right: 20px;
        }
        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          background: #0e0b16;
          color: #FFFFFF;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}