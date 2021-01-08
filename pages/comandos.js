import { getCommands } from '../services/api';
import { useState, useEffect } from 'react';
import { withTranslation } from '../services/i18n';
import Header from '../components/header';
import Head from '../components/head';
import Footer from '../components/footer';
import style from '../styles/pages/commands.module.css';

const CommandPage = ({ t, i18n }) => {

  const captalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const [commands, setCommands] = useState([]);
  const [category, setCategory] = useState('ações');

  const lang = i18n.language;

  const changeCategory = (category) => {
    setCategory(category);
    getCommands(lang)
      .then(res => {
        const reduced = res.reduce((p, c) => {
          if (c.category === category) p.push({ name: captalize(c.name), description: c.description });
          return p;
        }, [])
        setCommands(reduced)
      })
  }

  useEffect(() => {
    const fetchData = () =>
      getCommands(lang)
        .then(res => {
          const reduced = res.reduce((p, c) => {
            if (c.category === 'ações') p.push({ name: captalize(c.name), description: c.description });
            return p;
          }, [])
          setCommands(reduced)
        });

    fetchData();
  }, []);

  return (
    <div>
      <Head title={t('title')} favicon="assets/favicon.png" />
      <Header currentPage="commands" />
      <div className={style.container}>
        <div className={style.top}>
          <ul>
            <button onClick={() => changeCategory('ações')} className={category === 'ações' ? style.boxActive : style.box}><li>{t('actions')}</li></button>
            <button onClick={() => changeCategory('diversão')} className={category === 'diversão' ? style.boxActive : style.box}><li>{t('fun')}</li></button>
            <button onClick={() => changeCategory('economia')} className={category === 'economia' ? style.boxActive : style.box}><li>{t('eco')}</li></button>
            <button onClick={() => changeCategory('info')} className={category === 'info' ? style.boxActive : style.box}><li>{t('info')}</li></button>
            <button onClick={() => changeCategory('moderação')} className={category === 'moderação' ? style.boxActive : style.box}><li>{t('mod')}</li></button>
            <button onClick={() => changeCategory('rpg')} className={category === 'rpg' ? style.boxActive : style.box}><li>{t('rpg')}</li></button>
            <button onClick={() => changeCategory('util')} className={category === 'util' ? style.boxActive : style.box}><li>{t('util')}</li></button>
          </ul>
        </div>
        <div className={style.bottom}>
          <table>
            <thead>
              <tr>
                <th>{t('name')}</th>
                <th>{t('desc')}</th>
              </tr>
            </thead>
            <tbody>
              {commands?.map(cmd => (
                <tr key={cmd.name}>
                  <td>{cmd.name}</td>
                  <td>{cmd.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  )
}

CommandPage.getInitialProps = async () => ({
  namespacesRequired: ['commands', 'header', 'footer'],
})

export default withTranslation('commands')(CommandPage);
