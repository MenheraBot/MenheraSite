import { withTranslation } from "../services/i18n";
import Maintenance from '../components/maintenance'
import styles from '../styles/pages/boleham.module.css'

const Donate = ({ t }) => {
  return (
    <div>
      <div className={styles.container}>
        <Maintenance />
      </div>
    </div>
  );
};

Donate.getInitialProps = async () => ({
  namespacesRequired: ["common", "header", "footer"],
});

export default withTranslation("common")(Donate);
