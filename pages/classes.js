import Layout from '../components/default_layout'

export default function Home() {
  return (

    <Layout>
      <div className="container">
        <main>
          <h1 className="title">
            Classes de Boleham
        </h1>

        <br />
        <a href="/" className="back"><span>Voltar ao Início</span></a>

          <div className="grid">

            <section>
              <details className="content">
                <summary className="card">Assassino</summary>
                <p>Os assassinos são uma classe temida, o foco de batalha deles é estratégia e furtividade. Suas habilidades tem focos de combate corpo a corpo, e execução imediata.</p>
              </details>

              <details className="content">
                <summary className="card">Bárbaro</summary>
                <p>Bárbaros são equilibrados em dano e armadura. Batalham corpo a corpo usando suas ferramentas pesadas. Não possuem mana, mas sua habilidade única é poderosa o suficiente para suprir essa falta</p>
              </details>
              
              <details className="content">
                <summary className="card">Clérigo</summary>
                <p>Diferente dos feiticeiros, clérigos usam magia branca para conjurar seus feitiços. Eles tem muita afinidade com a natureza, conseguindo até mesmo usar feitiços de cura</p>
              </details>

              <details className="content">
                <summary className="card">Druida</summary>
                <p>Os druidas são criaturas que podem se transformar em um animal específico. Não possuem habilidades mágicas, mas usam sua transformação para batalhar</p>
              </details>

              <details className="content">
                <summary className="card">Espadachim</summary>
                <p>Estes usam espadas para batalhar. Possuem alta agilidade e habilidades de movimentação. Combate corpo a corpo é o que querem.</p>
              </details>

              <details className="content">
                <summary className="card">Feiticeiro</summary>
                <p>Feiticeiros usam magia negra para suas conjurações. Possuem conexões com criaturas das trevas. Além de poderem fazer contratos com essas criaturas, usam sua mana para conjurar seus feitiços</p>
              </details>

              <details className="content">
                <summary className="card">Monge</summary>
                <p>Monges usam combate físico e magias de fortalecimento para vencer suas batalhas</p>
              </details>

              <details className="content">
                <summary className="card">Necromante</summary>
                <p>Necromantes são bruxos de possessão. Eles possuem os mortos para usar seus poderes. Suas habilidades dependem de quem ele possuir</p>
              </details>

            </section>
          </div>
        </main>

        <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: left;
          align-items: left;
        }
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

          details[open] summary ~ * {
            animation: sweep .2s ease-in-out;
        }

          details p {
            padding-bottom: 10px;
            padding-left: 10px;
        }

          .content {
            background-color: #9c5daa;
            border-radius: 10px;
        }

        .back {
          padding: 0.7rem;
          text-align: cemter;
          background-size: cover;
          color: pink;
          text-decoration: none;
          border: 1px solid pink;
          border-radius: 90px;
          transition: color 0.15s ease, border-color 0.15s ease, 0.15s;
        }

        .back:hover {
          background-color: pink;
          color: black;
        }

          @keyframes sweep {
            0%    {opacity: 0; margin-top: -30px}
            100%  {opacity: 1; margin-top: 0px}
        }

          summary {
            padding: 15px;
            background-color: #9c5ddb;
            margin-bottom: 20px;
            outline:none
        }

          summary::-webkit-details-marker {
          display: none;
        }

          summary[open] {
            padding: 15px;
            background-color: #ffffff;
            margin-bottom: 26px;
        }

          .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          text-decoration: underline;
        }
  
          .grid {
          display: flex;
          align-items: left;
          justify-content: left;
          flex-direction: column;
          width: 100%;
          height: 100%;
          background-size: 100% 100%;
          margin-top: 3rem;
        }
  
        .card {
          flex-basis: 45%;
          padding: 1.5rem;
          font-size: 2rem;
          text-align: center;
          background-size: 100% 100%;
          width: 100%;
          height: 100%;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease, 0.15s;
        }

          summary::-webkit-details-marker {
          display: none
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
          }
          .title{
            font-size: 2.5rem;
          }
        }
      `}</style>
      </div>
    </Layout>
  )
}