import style from "../styles/pages/error.module.css";
import Head from '../components/head'
import { withTranslation } from '../services/i18n';

const Custom500 = ({ t }) => (
  <div className={style.box}>
    <Head title={t('title')} favicon="/assets/icon404.png" />
    <img src="/assets/404.png" />
    <h1><span>500</span><div id={style.responsive}> - {t('error500')}<br /></div>
      <h3><center><p>{t('500.start')}<br />{t('500.end')}</p></center>
        <p><br />
          <a href="/"><b>{t('back')}</b></a>
        </p>
      </h3>
    </h1>
  </div>
)


Custom500.getInitialProps = async () => ({
  namespacesRequired: ['error', 'header', 'footer'],
})

export default withTranslation('error')(Custom500)
