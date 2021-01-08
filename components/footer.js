import style from '../styles/components/footer.module.css'
import { withTranslation } from '../services/i18n';

const Footer = ({t}) => {
  return (
    <footer className={style.footer}>
      <a href="https://github.com/ySnoopyDogy/MenheraBot" target="_blank" rel="noopener noreferrer">
        {t('made')} <div id={style.heart}>❤️</div> {t('lux')}
        </a>
    </footer>
  )
}

export default withTranslation('footer')(Footer)
