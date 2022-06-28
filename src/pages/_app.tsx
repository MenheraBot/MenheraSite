import 'tailwindcss/tailwind.css';
import '../styles/global.css';

import App, { AppContext, AppInitialProps, AppProps } from 'next/app';

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../analytics/gtag';
import Analytics from '../analytics/Analytics';
import { appWithTranslation } from 'next-i18next';

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
      <Component {...pageProps} />
      <Analytics />
    </>
  );
};

export const getInitialProps = async (appContext: AppContext): Promise<AppInitialProps> => ({
  ...(await App.getInitialProps(appContext)),
});

export default appWithTranslation(Application);
