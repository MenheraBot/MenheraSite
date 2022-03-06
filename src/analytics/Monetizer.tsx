import Script from 'next/script';

type MonetizerType = '4x1' | 'Vertical';

const Monetizer = ({ type }: { type: MonetizerType }): JSX.Element => {
  switch (type) {
    case '4x1':
      return <div id='container-bba487e27eac27e2777e36e737c5148e' />;
    case 'Vertical':
      return (
        <Script
          strategy='afterInteractive'
          id='AdBanner'
          dangerouslySetInnerHTML={{
            __html: `
        atOptions = {
          'key' : '5b2d3dcfe40893f1295d0f9849e94d49',
          'format' : 'iframe',
          'height' : 300,
          'width' : 160,
          'params' : {}
        };
        document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://www.highconvertingformats.com/5b2d3dcfe40893f1295d0f9849e94d49/invoke.js"></scr' + 'ipt>');
          `,
          }}
        />
      );
    default:
      return <div id='container-bba487e27eac27e2777e36e737c5148e' />;
  }
};

export default Monetizer;
