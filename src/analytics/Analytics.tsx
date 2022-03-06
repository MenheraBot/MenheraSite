import Script from 'next/script';
import { GA_TRACKING_ID } from './gtag';

const Analytics = (): JSX.Element => (
  <>
    <Script
      strategy='afterInteractive'
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
    />
    <Script
      strategy='beforeInteractive'
      id='TaldoAD'
      dangerouslySetInnerHTML={{
        __html: `
        (function(s,u,z,p){s.src=u,s.setAttribute('data-zone',z),p.appendChild(s);})(document.createElement('script'),'https://iclickcdn.com/tag.min.js',4916025,document.body||document.documentElement)
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
