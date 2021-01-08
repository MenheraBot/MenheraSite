import Main from '../components/head';
import Header from '../components/header';
import Footer from '../components/footer';
import style from '../styles/pages/index.module.css';
import CookieConsent from "react-cookie-consent";
import { withTranslation } from '../services/i18n';

const Home = ({ t }) => {
  return (
    <div>
      <Main title="Menhera's Site" favicon="assets/favicon.png" />
      <Header />
      <CookieConsent
        location="bottom"
        buttonText="Okay"
        style={{ background: "#000" }}
        buttonStyle={{ color: "#fff", fontWeight: "bold", fontSize: "15px", background: "#9c5ddb", borderRadius: "50px", width: "300px", heigh: "30px" }}>
        {t('cookie')}
      </CookieConsent>
      <div className={style.container}>
        <div className={style.banner}>
          <div className={style.menhera_img}>
            <img src="assets/men.png" />
          </div>
          <div className={style.menhera_text}>
            <h1>{t('h1')}</h1>
            <p>{t('p')}</p>
            <br />
            <a href="https://discord.com/api/oauth2/authorize?client_id=708014856711962654&permissions=1007025271&scope=bot"><button><b>{t('b')}</b></button></a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['common', 'header', 'footer'],
})

export default withTranslation('common')(Home)
