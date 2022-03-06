import Script from 'next/script';
import { GA_TRACKING_ID } from './gtag';

const Analytics = (): JSX.Element => (
  <>
    <Script
      strategy='afterInteractive'
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
    />
    <Script
      async={true}
      data-cfasync='false'
      src='https://pl17080356.effectivecpmcontent.com/bba487e27eac27e2777e36e737c5148e/invoke.js'
    />
    <Script
      async={true}
      strategy='afterInteractive'
      id='ga'
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
      }}
    />
    <Script
      strategy='afterInteractive'
      id='ga'
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
      }}
    />
  </>
);

export default Analytics;
