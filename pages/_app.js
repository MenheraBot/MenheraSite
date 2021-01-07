import '../styles/global.css'
import ReactGA from 'react-ga'

export default function App({ Component, pageProps }) {
  ReactGA.initialize('G-HKJ8H7FR52');
  return <Component {...pageProps} />
}
