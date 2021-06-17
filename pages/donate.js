import { withTranslation } from "../services/i18n";

const Donate = ({ t }) => {
  return (
    <div>
      <h1><a href="https://www.patreon.com/menherabot">BECOME A PATREON</a></h1>
    </div>
  );
};

Donate.getInitialProps = async () => ({
  namespacesRequired: ["donate", "header", "footer"],
});

export default withTranslation("donate")(Donate);
