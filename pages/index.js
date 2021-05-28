import Head from "../components/head";
// import style from '../styles/pages/index.module.css';
import CookieConsent from "react-cookie-consent";
import { withTranslation } from "../services/i18n";
import constants from "../database/constants.json";
import Image from "next/image";

const Home = ({ t }) => {
  return (
    <div>
      <Head title="Menhera's Site" favicon="assets/favicon.png" />
      <CookieConsent
        location="bottom"
        buttonText="Okay"
        style={{ background: "#000" }}
        buttonStyle={{
          color: "#fff",
          fontWeight: "bold",
          fontSize: "15px",
          background: "#9c5ddb",
          borderRadius: "50px",
          width: "300px",
          heigh: "30px",
        }}
      >
        {t("cookie")}
      </CookieConsent>
      <div className="w-full h-screen flex justify-center">
        <section className="px-30 w-11/12 h-full flex flex-row mt-44 justify-around">
          <div className="relative w-52	h-96">
            <Image src="/assets/men.png" layout="fill" />
          </div>
          <div className="w-3/5	">
            <h1 className="text-4xl font-extrabold text-white">{t("h1")}</h1>
            <p className="text-xl text-gray-500 mt-10">{t("p")}</p>
          </div>
        </section>
      </div>
    </div>
  );
};

Home.getInitialProps = async () => ({
  namespacesRequired: ["common", "header", "footer"],
});

export default withTranslation("common")(Home);
