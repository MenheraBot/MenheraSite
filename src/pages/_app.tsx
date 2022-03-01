import 'tailwindcss/tailwind.css';
import '../styles/global.css';

import { ChakraProvider } from '@chakra-ui/react';

import App, { AppContext, AppProps } from 'next/app';

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../analytics/gtag';
import Analytics from '../analytics/Analytics';
import { appWithTranslation } from 'next-i18next';
import theme from '../theme';

const Application = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_AD_ID}`}
          crossOrigin='anonymous'
        ></script>
      </ChakraProvider>
      <Analytics />
    </>
  );
};

Application.getInitialProps = async (appContext: AppContext) => ({
  ...(await App.getInitialProps(appContext)),
});

export default appWithTranslation(Application);
