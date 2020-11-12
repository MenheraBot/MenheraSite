import Layout from '../components/default_layout'

export default function Home() {
  return (
    <div className="container">
      <Layout>
        <main>
          <a href="/" className="back"><span>Voltar ao Início</span></a>
          <h1 className="title">
            Galeria da Amanda
        </h1>
          <p className="description">
            Eu amo a amanda, e aqui está algumas fotos dela (Amanda casa comigo, e manda haj)
        </p>
          <div className="grid">
            <img src="/amanda/1.jpg" className="card" />

            <img src="/amanda/2.jpg" className="card" />

            <img src="/amanda/3.jpg" className="card" />

            <img src="/amanda/4.jpg" className="card" />
          </div>
        </main>
      </Layout>

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
          flex-basis: 100%;
          padding: 1.5rem;
          text-align: left;
          background-size: cover;
          width: 50%;
          height: 50%;    
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
          width: 55%;
          height: 55%;  
        }
        .card img {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }
        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  )
}