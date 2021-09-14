import style from '../styles/components/footer.module.css';
import { useTranslation } from 'next-i18next';

const Footer = () => {
  const { t } = useTranslation('footer');

  return (
    <footer className={style.footer}>
      <a href='https://github.com/ySnoopyDogy/MenheraBot' target='_blank' rel='noopener noreferrer'>
        {t('made')} <div id={style.heart}>❤️</div> {t('lux')}
      </a>
    </footer>
  );
};

export default Footer;
