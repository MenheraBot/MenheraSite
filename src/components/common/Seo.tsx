import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import { useRouter } from 'next/router';

type Props = {
  page: string;
};

export function Seo({ page }: Props): JSX.Element {
  const [translate, i18n] = useTranslation(page);

  const t = (key: string): string => translate(`seo.${key}`);

  const router = useRouter();
  const canonicalUrl = (
    `https://menherabot.xyz` + (router.asPath === '/' ? '' : router.asPath)
  ).split('?')[0];

  return (
    <Head>
      <title>{t('title')}</title>
      <meta name='description' content={t('description')} />
      <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />

      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta httpEquiv='Content-Type' content='text/html;charset=UTF-8' />
      <meta name='robots' content='index, follow' />
      <meta name='googlebot' content='index, follow' />
      <link rel='canonical' href={canonicalUrl} />
      <meta charSet='utf-8' />
      <meta
        name='keywords'
        content='menhera, bot, discord, discordbot, menherabot, menhera bot, bot brasileiro'
      />
      <meta name='theme-color' content='#975AFF' />

      <link rel='alternate' href='http://menherabot.xyz/' hrefLang='x-default' />
      <link rel='alternate' href='http://menherabot.xyz/en-US' hrefLang='en-US' />
      <link rel='alternate' href='http://menherabot.xyz/pt-BR' hrefLang='pt-BR' />
      <link rel='alternate' href='http://menherabot.xyz/en-US' hrefLang='en' />
      <link rel='alternate' href='http://menherabot.xyz/pt-BR' hrefLang='pt' />
      <meta name='language' content={i18n.language} />
      <meta httpEquiv='content-language' content={i18n.language} />

      <meta property='og:locale' content={i18n.language} />
      <meta property='og:locale:alternate' content='pt_BR' />
      <meta property='og:locale:alternate' content='en_US' />
      <meta property='og:title' content={t('title')} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://menherabot.xyz/' />
      <meta property='og:image' content='https://menherabot.xyz/images/menhera-bot.png' />
      <meta
        property='og:image:secure_url'
        content='https://menherabot.xyz/images/menhera-bot.png'
      />
      <meta property='og:image:type' content='image/png' />
      <meta property='og:site_name' content='MenheraBot' />
      <meta property='og:image:width' content='1024' />
      <meta property='og:image:height' content='1024' />
      <meta property='og:description' content={t('description')} />
    </Head>
  );
}
