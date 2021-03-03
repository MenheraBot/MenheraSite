import Main from '../components/head';
import style from '../styles/pages/index.module.css';
import CookieConsent from "react-cookie-consent";
import { withTranslation } from '../services/i18n';
import { add_bot_url } from '../database/constants.json'

const Home = ({ t }) => {
  return (
    <div>
      <Main title="Menhera's Site" favicon="assets/favicon.png" />
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
            <a href={add_bot_url}><button><b>{t('b')}</b></button></a>
          </div>
        </div>
      </div>
    </div>
  )
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['common', 'header', 'footer'],
})

export default withTranslation('common')(Home)
