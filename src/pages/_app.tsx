import 'tailwindcss/tailwind.css';
import '../styles/global.css';
import ReactGA from 'react-ga';
import App from 'next/app';
import { appWithTranslation } from 'next-i18next';

const Application = ({ Component, pageProps }) => {
  ReactGA.initialize('G-HKJ8H7FR52');
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

Application.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

export default appWithTranslation(Application);
