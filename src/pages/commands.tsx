import { useState, useEffect } from 'react';
import { GetStaticProps } from 'next';

import { useTranslation } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import CacheManager from '../database/cacheManager';
import { capitalize } from '../utils/capitalize';
import { Command } from '../../typings/Command';

import Head from '../components/head';
import Footer from '../components/footer';
import Header from '../components/header';
import CommandTableRow from '../components/commandTableRow';

import style from '../styles/pages/commands.module.css';

const CommandPage = (): JSX.Element => {
  const { t } = useTranslation('commands');

  const [commands, setCommands] = useState<Command[]>([]);
  const [category, setCategory] = useState('actions');

  useEffect(() => {
    changeCategory(category);
  }, [category]);

  const changeCategory = async (category: string) => {
    setCategory(category);
  };

  useEffect(() => {
    const fetchData = () => {
      CacheManager.getCommands().then((response) => {
        const reduced = response.reduce((acc: Command[], command) => {
          if (command.category === category) {
            acc.push({ ...command, name: capitalize(command.name) });
          }

          return acc;
        }, []);

        reduced.sort((a, b) => a.name.localeCompare(b.name));
        setCommands(reduced);
      });
    };

    fetchData();
  }, [category]);

  return (
    <div>
      <Head title={t('title')} favicon='assets/favicon.png' />
      <Header />
      <div className={style.container}>
        <div className={style.top}>
          <div className='text-center'>
            <ul>
              <button
                onClick={() => changeCategory('actions')}
                className={category === 'actions' ? style.boxActive : style.box}
              >
                <li>{t('actions')}</li>
              </button>
              <button
                onClick={() => changeCategory('fun')}
                className={category === 'fun' ? style.boxActive : style.box}
              >
                <li>{t('fun')}</li>
              </button>
              <button
                onClick={() => changeCategory('economy')}
                className={category === 'economy' ? style.boxActive : style.box}
              >
                <li>{t('eco')}</li>
              </button>
              <button
                onClick={() => changeCategory('info')}
                className={category === 'info' ? style.boxActive : style.box}
              >
                <li>{t('info')}</li>
              </button>

              <button
                onClick={() => changeCategory('util')}
                className={category === 'util' ? style.boxActive : style.box}
              >
                <li>{t('util')}</li>
              </button>
            </ul>
          </div>
        </div>
        <div className={style.bottom}>
          <div className='text-center'>
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['commands', 'header', 'footer'])),
    },
  };
};

export default CommandPage;
