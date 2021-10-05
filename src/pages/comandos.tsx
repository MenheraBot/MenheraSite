import { fetchCommands } from '../cacheManager';
import { useState, useMemo } from 'react';
import Head from '../components/head';
import Footer from '../components/footer';
import Header from '../components/header';
import style from '../styles/pages/commands.module.css';
import CommandTableRow from '../components/commandTableRow';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import { Command } from '../api.types';

type Props = {
  commands: Command[];
};

const CommandPage = ({ commands }: Props): JSX.Element => {
  const { t } = useTranslation('commands');

  const [category, setCategory] = useState('actions');

  const filteredCommands = useMemo(() => {
    const categoryCmds = commands.filter((cmd) => cmd.category === category);
    return [...categoryCmds].sort((a, b) => a.name.localeCompare(b.name));
  }, [category, commands]);

  return (
    <div>
      <Head title={t('title')} favicon='assets/favicon.png' />
      <Header />
      <div className={style.container}>
        <div className={style.top}>
          <div className='text-center'>
            <ul>
              <button
                onClick={() => setCategory('actions')}
                className={category === 'actions' ? style.boxActive : style.box}
              >
                <li>{t('actions')}</li>
              </button>
              <button
                onClick={() => setCategory('fun')}
                className={category === 'fun' ? style.boxActive : style.box}
              >
                <li>{t('fun')}</li>
              </button>
              <button
                onClick={() => setCategory('economy')}
                className={category === 'economy' ? style.boxActive : style.box}
              >
                <li>{t('eco')}</li>
              </button>
              <button
                onClick={() => setCategory('info')}
                className={category === 'info' ? style.boxActive : style.box}
              >
                <li>{t('info')}</li>
              </button>
              <button
                onClick={() => setCategory('util')}
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
                  filteredCommands?.map((cmd) => <CommandTableRow key={cmd.name} cmd={cmd} t={t} />)
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

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
  const commands = await fetchCommands();

  return {
    props: {
      commands,
      ...(await serverSideTranslations(locale, ['commands', 'header', 'footer'])),
    },
    revalidate: 60,
  };
};

export default CommandPage;
