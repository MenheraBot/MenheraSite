import style from '../styles/components/footer.module.css';
import i18n from '../services/i18n';

const Footer = ({ t }) => {
  return (
    <footer className={style.footer}>
      <a href='https://github.com/ySnoopyDogy/MenheraBot' target='_blank' rel='noopener noreferrer'>
        {t('made')}{' '}
        <div id={style.heart} data-testid='emoji'>
          ❤️
        </div>{' '}
        {t('lux')}
      </a>
    </footer>
  );
};

export default i18n.withTranslation('footer')(Footer);
