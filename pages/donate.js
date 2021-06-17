import { withTranslation } from "../services/i18n";
import Maintenance from '../components/maintenance'
import styles from '../styles/pages/boleham.module.css'

const Donate = ({ t }) => {
  return (
    <div>
      <h1><a href="https://www.patreon.com/menherabot">BECOME A PATREON</a></h1>
    </div>
  );
};

Donate.getInitialProps = async () => ({
  namespacesRequired: ["common", "header", "footer"],
});

export default withTranslation("common")(Donate);
