import { fetchCommands } from '../services/api/api';
import { useState, useMemo } from 'react';

import style from '../styles/pages/commands.module.css';
import CommandTableRow from '../components/command-table-row';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import { Command } from '../services/api/api.types';
import Layout from '../components/ui/layout';

type Props = {
  commands: Command[];
  locale: string;
};

const CommandPage = ({ commands, locale }: Props): JSX.Element => {
  const { t } = useTranslation('commands');

  const [category, setCategory] = useState('actions');

  const filteredCommands = useMemo(() => {
    const categoryCmds = commands.filter((cmd) => cmd.category === category);
    return [...categoryCmds].sort((a, b) => a.name.localeCompare(b.name));
  }, [category, commands]);

  return (
    <Layout title={t('title')}>
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
                onClick={() => setCategory('roleplay')}
                className={category === 'roleplay' ? style.boxActive : style.box}
              >
                <li>RPG</li>
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
                    <td aria-colspan={2} className='text-center'>
                      <em className='text-gray-500'>Loading...</em>
                    </td>
                  </tr>
                ) : (
                  filteredCommands?.map((cmd, i) => {
                    const base = Math.random();
                    return (
                      <CommandTableRow key={base + i} id={cmd.name} cmd={cmd} t={t} lang={locale} />
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
  const commands = await fetchCommands();

  return {
    props: {
      locale: locale ?? 'en',
      commands,
      ...(await serverSideTranslations(locale as string, [
        'common',
        'commands',
        'header',
        'footer',
      ])),
    },
    revalidate: 60,
  };
};

export default CommandPage;
