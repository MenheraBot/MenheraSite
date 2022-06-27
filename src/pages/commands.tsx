import { fetchCommands } from '../services/api/api';
import { useState, useMemo, useEffect } from 'react';

import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Command } from '../services/api/api.types';
import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';
import { SectionDivider } from '../components/common/SectionDivider';
import { Button } from '../components/common/Button';
import { SearchInput } from '../components/common/SearchInput';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

type Props = {
  commands: Command[];
  locale: string;
};

const extractSubcommands = (data: Command[]) => {
  return data.reduce<Command[]>((cmds, command) => {
    if (
      command.options.length === 0 ||
      !command.options.some((a) => a.type === 'SUB_COMMAND_GROUP' || a.type === 'SUB_COMMAND')
    ) {
      cmds.push({
        ...command,
        nameLocalizations: command.nameLocalizations ?? null,
        options: command.options
          ? command.options.map((a) => {
              return {
                ...a,
                nameLocalizations: a.nameLocalizations ?? null,
                descriptionLocalizations: a.descriptionLocalizations,
              };
            })
          : [],
        descriptionLocalizations: command.descriptionLocalizations ?? null,
      });
      return cmds;
    }

    command.options.forEach((opt) => {
      if (opt.type === 'SUB_COMMAND_GROUP') {
        opt.options.forEach((option) => {
          cmds.push({
            category: command.category,
            cooldown: command.cooldown,
            disabled: command.disabled,
            description: option.description,
            descriptionLocalizations: option.descriptionLocalizations ?? null,
            options: option.options ?? [],
            name: `${command.name} ${opt.name} ${option.name}`,
            nameLocalizations: option.nameLocalizations
              ? {
                  'en-US': `${command.nameLocalizations?.['en-US']} ${opt.nameLocalizations?.['en-US']} ${option.nameLocalizations?.['en-US']}`,
                }
              : null,
          });
        });
      }

      if (opt.type === 'SUB_COMMAND') {
        cmds.push({
          category: command.category,
          cooldown: command.cooldown,
          disabled: command.disabled,
          description: opt.description,
          descriptionLocalizations: opt.descriptionLocalizations,
          options: opt.options ?? [],
          name: `${command.name} ${opt.name}`,
          nameLocalizations: opt.nameLocalizations
            ? {
                'en-US': `${command.nameLocalizations?.['en-US']} ${opt.nameLocalizations?.['en-US']}`,
              }
            : null,
        });
      }
    });

    return cmds;
  }, []);
};

const CommandPage = ({ commands }: Props): JSX.Element => {
  const router = useRouter();

  const categories = useMemo(() => {
    const categories = new Set<string>();
    commands.forEach((cmd) => categories.add(cmd.category));
    return [...categories].sort();
  }, [commands]);

  const [selectedCategory, setCategory] = useState(categories[0]);

  useEffect(() => {
    if (router && router.query) {
      const founded = categories.find((a) => a === router.query?.category);

      if (founded) setCategory(founded);
    }
  }, [router, categories]);

  const filteredCommands = useMemo(() => {
    const categoryCmds = commands.filter((cmd) => cmd.category === selectedCategory);
    return categoryCmds.sort((a, b) => a.name.localeCompare(b.name));
  }, [selectedCategory, commands]);

  const { t, i18n } = useTranslation('commands');

  const needLocalizate = i18n.language !== 'pt-BR';

  return (
    <>
      <Header />
      <main className='mx-auto max-w-7xl px-6'>
        <SectionDivider title={t('commands')} withoutSpace className='my-6' />
        <h1 className='text-white font-bold text-3xl md:text-4xl mb-3'>
          {t('title')}
          <span className='text-primary'>{' >~<'}</span>
        </h1>
        <p className='text-describe text-xl'>{t('description')}</p>

        <div className='md:flex flex-row justify-between gap-10 md:mt-10'>
          <ul className='bg-secondary-bg py-11 px-4 my-6 flex flex-col gap-6 w-full max-w-xs'>
            {categories.map((category) => (
              <li key={category}>
                <Button
                  className='w-full text-start'
                  variant={selectedCategory === category ? 'primary' : 'secondary'}
                  onClick={() => setCategory(category)}
                >
                  {t(`categories.${category as 'fun'}`)}
                </Button>
              </li>
            ))}
          </ul>
          <div className='bg-secondary-bg py-11 px-4 mb-6 flex-1'>
            <div className='md:flex flex-row-reverse justify-between items-center'>
              <SearchInput placeholder={t('search')} />
              <h2 className='text-white font-bold text-3xl md:text-4xl my-6'>{t('list')}</h2>
            </div>
            <h4 className='text-white font-bold text-xl'>{t('info')}</h4>
            <ul className='mt-6 overflow-auto h-full max-h-96 w-full'>
              {filteredCommands.map((cmd) => (
                <li
                  key={cmd.name.replaceAll(' ', '-')}
                  className='border-b-2 border-b-separate-color py-6 px-1'
                >
                  <span className='text-primary text-lg font-bold capitalize underline'>
                    {needLocalizate && cmd.nameLocalizations?.['en-US']
                      ? cmd.nameLocalizations?.['en-US']
                      : cmd.name}
                  </span>
                  <p className='text-describe my-4'>
                    {needLocalizate && cmd.descriptionLocalizations?.['en-US']
                      ? cmd.descriptionLocalizations['en-US']
                      : cmd.description}
                  </p>
                  <span className='text-describe'>
                    {cmd.options.map((op) => (
                      <span
                        key={`${cmd.name}-${op.name}`}
                        className='hover:text-primary cursor-pointer'
                      >
                        {op.required ? `{${op.name}}` : `[${op.name}]`}
                      </span>
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
  const rawCommands = await fetchCommands();

  const commands = extractSubcommands(rawCommands);

  return {
    props: {
      locale: locale as string,
      commands,
      ...(await serverSideTranslations(locale as string, ['commands', 'header', 'footer'])),
    },
    revalidate: 60,
  };
};

export default CommandPage;
