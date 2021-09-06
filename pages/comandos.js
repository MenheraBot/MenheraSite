import CacheManager from '../database/cacheManager';
import { useState, useEffect } from 'react';
import { withTranslation } from '../services/i18n';
import Head from '../components/head';
import Footer from '../components/footer'
import Header from '../components/header'
import style from '../styles/pages/commands.module.css';

const CommandPage = ({ t, i18n }) => {

  const captalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const [commands, setCommands] = useState([]);
  const [category, setCategory] = useState('actions');

  const lang = i18n.language;

  useEffect(() => {
    changeCategory(category)
  }, [lang]);

  const changeCategory = async (category) => {
    setCategory(category);

    CacheManager.getCommands().then(res => {
      const reduced = res.reduce((p, c) => {
        if (c.category === category) p.push({ name: captalize(c._id), description: c.description, cooldown: c.cooldown, options: c.options });
        return p;
      }, [])
      setCommands(reduced)
    })
  }

  useEffect(() => {
    const fetchData = () => {
      CacheManager.getCommands().then(res => {
        const reduced = res.reduce((p, c) => {
          if (c.category === category) p.push({ name: captalize(c._id), description: c.description, cooldown: c.cooldown, options: c.options });
          return p;
        }, [])
        setCommands(reduced)
      })
    }
    fetchData();
  }, []);

  return (
    <div>
      <Head title={t('title')} favicon="assets/favicon.png" />
      <Header />
      <div className={style.container}>
        <div className={style.top}>
          <center><ul>
            <button onClick={() => changeCategory('actions')} className={category === 'actions' ? style.boxActive : style.box}><li>{t('actions')}</li></button>
            <button onClick={() => changeCategory('fun')} className={category === 'fun' ? style.boxActive : style.box}><li>{t('fun')}</li></button>
            <button onClick={() => changeCategory('economy')} className={category === 'economy' ? style.boxActive : style.box}><li>{t('eco')}</li></button>
            <button onClick={() => changeCategory('info')} className={category === 'info' ? style.boxActive : style.box}><li>{t('info')}</li></button>
            {/*<button onClick={() => changeCategory('rpg')} className={category === 'rpg' ? style.boxActive : style.box}><li>{t('rpg')}</li></button>*/}
            <button onClick={() => changeCategory('util')} className={category === 'util' ? style.boxActive : style.box}><li>{t('util')}</li></button>
          </ul></center>
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
                {commands?.map(cmd => (
                  <tr key={cmd.name}>
                    <td>{cmd.name}</td>
                    <td>{cmd.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </center>
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
