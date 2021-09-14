import CacheManager from '../database/cacheManager';
import { useState, useEffect, useCallback } from 'react';
import Head from '../components/head';
import Footer from '../components/footer';
import Header from '../components/header';
import style from '../styles/pages/commands.module.css';
import CommandTableRow from '../components/commandTableRow';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

const CommandPage = () => {
  const { t, i18n } = useTranslation('boleham');

  const captalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const [commands, setCommands] = useState([]);
  const [category, setCategory] = useState('actions');

  const lang = i18n.language;

  useEffect(() => {
    changeCategory(category);
  }, [lang]);

  const changeCategory = useCallback((category) => {
    setCategory(category);

    return CacheManager.getCommands().then((res) => {
      const reduced = res.reduce((p, c) => {
        if (c.category === category)
          p.push({
            name: captalize(c._id),
            description: c.description,
            cooldown: c.cooldown,
            options: c.options,
          });
        return p;
      }, []);
      setCommands(reduced);
    });
  }, []);

  useEffect(() => {
    const fetchData = () => {
      CacheManager.getCommands().then((res) => {
        const reduced = res.reduce((p, c) => {
          if (c.category === category)
            p.push({
              name: captalize(c._id),
              description: c.description,
              cooldown: c.cooldown,
              options: c.options,
            });
          return p;
        }, []);
        setCommands(reduced);
      });
    };
    fetchData();
  }, []);

  return (
    <div>
      <Head title={t('title')} favicon='assets/favicon.png' />
      <Header />
      <div className={style.container}>
        <div className={style.top}>
          <center>
            <ul>
              <button
                onClick={() => changeCategory('actions')}
                className={category === 'actions' ? style.boxActive : style.box}>
                <li>{t('actions')}</li>
              </button>
              <button
                onClick={() => changeCategory('fun')}
                className={category === 'fun' ? style.boxActive : style.box}>
                <li>{t('fun')}</li>
              </button>
              <button
                onClick={() => changeCategory('economy')}
                className={category === 'economy' ? style.boxActive : style.box}>
                <li>{t('eco')}</li>
              </button>
              <button
                onClick={() => changeCategory('info')}
                className={category === 'info' ? style.boxActive : style.box}>
                <li>{t('info')}</li>
              </button>
              {/*<button onClick={() => changeCategory('rpg')} className={category === 'rpg' ? style.boxActive : style.box}><li>{t('rpg')}</li></button>*/}
              <button
                onClick={() => changeCategory('util')}
                className={category === 'util' ? style.boxActive : style.box}>
                <li>{t('util')}</li>
              </button>
            </ul>
          </center>
        </div>
        <div className={style.bottom}>
          <center>
            <table>
              <thead>
                <tr>
                  <th>{t('name')}</th>
                  <th>{t('desc')}</th>
                </tr>
              </thead>
              <tbody>
                {commands.length === 0 ? (
                  <tr>
                    <td colSpan={2} className='text-center'>
                      <em className='text-gray-500'>Loading...</em>
                    </td>
                  </tr>
                ) : (
                  commands?.map((cmd) => <CommandTableRow key={cmd.name} cmd={cmd} t={t} />)
                )}
              </tbody>
            </table>
          </center>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['commands', 'header', 'footer'])),
      // Will be passed to the page component as props
    },
  };
}

export default CommandPage;
