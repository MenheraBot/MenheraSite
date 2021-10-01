import i18n from "../services/i18n";
import Head from '../components/head';
import Footer from '../components/footer'
import Header from '../components/header'
import Image from 'next/image'

import { useWindowSize } from "../hooks/useWindowSize";

const Donate = ({ t }) => {
  const { width, height } = useWindowSize();

  return (
    <div>
      {width > 600 && (
        <>
          <Head title={t('title')} favicon="assets/favicon.png" />
          <Header />
          <section className="container mx-auto flex self-center items-center place-self-center justify-center text-center h-screen">
            <div className="flex flex-col w-3/4 mt-32">
              <h1 className="text-8xl text-purple-800 sm:text-7xl font-bold -mt-52 text-shadow">{t('h1')}</h1>
              <p className="text-purple-700 text-2xl mt-4">{t('p')}</p>
              <div className="mt-11 text-5xl text-white"><span className="font-semibold text-green-400">Pix:</span> donate@menherabot.xyz</div>
            </div>
          </section>
          <Footer />
        </>
      )}

      {width < 600 && (
        <>
          <Head title={t('title')} favicon="assets/favicon.png" />
          <Header />
          <section className="container mx-auto flex items-center justify-center text-center h-screen mt-16">
            <div className="flex flex-col w-3/4 mt-32">
              <h1 className="text-8xl text-purple-800 sm:text-7xl font-bold -mt-52 text-shadow">{t('h1')}</h1>
              <p className="text-purple-700 text-1xl mt-4">{t('p')}</p>
              <div className="my-8 text-3xl text-white"><span className="font-semibold text-green-400">Pix:</span> donate@menherabot.xyz</div>
              <Image src="/assets/cry.png" width="300" height="400" className="p-2" />
            </div>
          </section>
          <Footer />
        </>
      )}
    </div>
  );
};

Donate.getInitialProps = async () => ({
  namespacesRequired: ["donate", "header", "footer"],
});

export default i18n.withTranslation("donate")(Donate);
