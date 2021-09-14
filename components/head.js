import Head from 'next/head';

export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <link rel='icon' href={props.favicon} />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta property='og:title' content="Menhera'Site" />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://menherabot.xyz/' />
        <meta property='og:image' content='https://menherabot.xyz/assets/men.png' />
        <meta property='og:image:type' content='image/png' />
        <meta property='og:image:width' content='564' />
        <meta property='og:image:height' content='1002' />
        <meta
          property='og:description'
          content='This is the oficial website for MenheraBot, a Brazilian Discord Bot focused in Fun and RPG. Add it, see her commands and more!'
        />

        <meta name='twitter:image:src' content='https://menherabot.xyz/assets/baner.png' />
        <meta name='twitter:site' content='@__MenheraBot' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content="Menhera's Site" />
        <meta
          name='twitter:description'
          content='This is the oficial website for MenheraBot, a Brazilian Discord Bot focused in Fun and RPG. Add it, see her commands and more!'
        />
        <meta name='theme-color' content='#7835e6' />
        <meta charSet='utf-8' />
        {/* eslint-disable-next-line @next/next/next-script-for-ga */}
        <script async src='https://www.googletagmanager.com/gtag/js?id=G-HKJ8H7FR52'>
          {' '}
        </script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HKJ8H7FR52');
          `,
          }}
        />
      </Head>
    </div>
  );
}
