import Head from "next/head";

export default function Custom404() {
    return (
        <div className="box">
            <Head>
                <title>404 - Página não encontrada</title>
                <link rel="icon" href="/favicon/favicon.png" />
            </Head>
            <img src="/icons/404.png" />
            <h1><span> 404 </span> - Página não encontrada<br />
                <h3>
                    Eu não sei o que tu procuras, <br />
        mas certamente não está aqui...
        <p>
                        <a href="/"> Voltar para o início </a>
                    </p>
                </h3>
            </h1>
            <style jsx>{`
        
        .box {
            display: flex;
            padding-top: 150px;
            justify-content: center;
            align-items: center;
        }

        .box h1 {
            font-weight: 50;
        }

        .box h3 {
            font-size: 75%;
            font-weight: 50;
        }

        .box a{
          display: flex;
          justify-content: center;
          padding: 10px;
          background-size: cover;  
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease, 0.25s;
        }

        .box a:hover {
          border-color: green;
          background-color: #9c5ddb;
          transition: 0.25s;
          height: 120%;  
        }

        .box span {
            color: red;
            font-weight: 500;
            font-size: 130%;
        }

        `}
            </style>
        </div>
    )
}