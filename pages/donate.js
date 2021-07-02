import { withTranslation } from "../services/i18n";
import Head from '../components/head';
import Footer from '../components/footer'
import Header from '../components/header'
import Image from 'next/image'

const Donate = ({ t }) => {
  return (
    <div>
      <Head title={t('title')} favicon="assets/favicon.png" />
      <Header />
      <section className="container mx-auto flex self-center items-center place-self-center justify-center text-center h-screen bg-white">
        <Image src="/assets/cry.png" width="333" height="444" className="sm:hidden" />
        <h1 className="text-8xl text-purple-800 sm:text-7xl font-bold text-shadow">{t('h1')}</h1>
      </section>
      <Footer />
    </div>
  );
};

Donate.getInitialProps = async () => ({
  namespacesRequired: ["donate", "header", "footer"],
});

export default withTranslation("donate")(Donate);
