import Head from 'next/head'

export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <link rel="icon" href={props.favicon} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Menhera's Site" key="title" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://menhera-site.vercel.app/" />
        <meta property="og:image" content="https://menhera-site.vercel.app/assets/favicon.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta property="og:description" content="O site oficial da Menhera Bot!" />
        <meta name="theme-color" content="#7835e6" />
        <meta charSet="utf-8" />
      </Head>
    </div>
  )
}
