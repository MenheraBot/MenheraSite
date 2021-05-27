import 'tailwindcss/tailwind.css'
import '../styles/global.css';
import ReactGA from 'react-ga';
import App from 'next/app';
import { appWithTranslation } from '../services/i18n';
import Footer from '../components/footer'
import Header from '../components/header'

const Application = ({ Component, pageProps }) => {
  ReactGA.initialize('G-HKJ8H7FR52');
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

Application.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) })

export default appWithTranslation(Application)

