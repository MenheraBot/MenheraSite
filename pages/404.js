import style from "../styles/pages/error.module.css";
import Head from '../components/head'
import Header from '../components/header'
import Footer from '../components/footer'
import { withTranslation } from '../services/i18n';

const Custom404 = ({ t }) => (
  <div className={style.box}>
    <Header />
    <Head title={t('title')} favicon="/assets/icon404.png" />
    <img src="/assets/404.png" />
    <h1><span>404</span><div id={style.responsive}> - {t('pnf')}<br /></div>
      <h3><center><p>{t('text.start')}<br />{t('text.end')}</p></center>
        <p><br />
          <a href="/"><b>{t('back')}</b></a>
        </p>
      </h3>
    </h1>
    <Footer />
  </div>
)

export default withTranslation('error')(Custom404)
