import style from '../../styles/components/footer.module.css';
import { useTranslation } from 'react-i18next';

const Footer = (): JSX.Element => {
  const { t } = useTranslation('footer');

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

export default Footer;
