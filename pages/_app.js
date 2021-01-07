import '../styles/global.css'
import ReactGA from 'react-ga'

export default function App({ Component, pageProps }) {
  ReactGA.initialize(process.env.GA_ID);
  return <Component {...pageProps} />
}
