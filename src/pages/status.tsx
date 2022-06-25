import { fetchCommands, fetchStatus } from '../services/api/api';

import { useTranslation } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { Command, ShardData } from '../services/api/api.types';
import { useEffect, useState } from 'react';
import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';
import { SectionDivider } from '../components/common/SectionDivider';
import classnames from 'classnames';
import { BsSearch } from 'react-icons/bs';
import { SearchInput } from '../components/common/SearchInput';
type Props = {
  lang: string;
  disabledCommands: Command[];
};

interface StatusTextProps {
  children: React.ReactNode;
  status: 'success' | 'error' | 'warning';
}
const StatusText = ({ children, status }: StatusTextProps) => {
  const bgColor = 'bg-status-' + status;
  const textColor = 'text-status-' + status;

  return (
    <div className='flex items-center'>
      <div className={classnames('h-4 w-5 rounded-full', bgColor)} />
      <span className={classnames('font-semibold ml-3', textColor)}>{children}</span>
    </div>
  );
};

const rand = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];

const services = [
  {
    name: 'Discord Bot',
    activeShards: 40,
    problematicShards: 20,
    shards: Array.from({ length: 50 }, (_, i) => ({
      id: i,
      cluster: 1,
      uptime: '1h',
      serverCount: 100,
      status: rand(['success', 'error', 'warning']),
      offlineServers: 0,
    })),
  },
];

const StatusPage = ({ lang, disabledCommands }: Props): JSX.Element => {
  return (
    <>
      <Header />
      <SectionDivider title='Status' withoutSpace className='mt-10 mb-6 px-6' />
      <main className='mx-auto max-w-7xl px-6 pb-6'>
        <div className='md:flex flex-row'>
          <div>
            <small className='hidden md:block text-white text-sm mb-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </small>
            <h1 className='text-white my-4 text-4xl font-bold'>Serviços ativos</h1>
            <p className='text-describe'>
              Para que eu seja o que eu sou, eu necessito de diversas aplicações que tem o foco em
              fazer algo de mim, abaixo estão todas as aplicações que fazem a MenheraBot ser a
              MenheraBot
            </p>
            <ul className='my-6 flex flex-col flex-wrap md:flex-row gap-3'>
              <li>
                <StatusText status='success'>Nenhum Problema</StatusText>
              </li>
              <li>
                <StatusText status='warning'>Parcialmente Debilitado</StatusText>
              </li>
              <li>
                <StatusText status='error'>Offine</StatusText>
              </li>
            </ul>
          </div>
          <SearchInput />
        </div>
        <div>
          {services.map((service, i) => (
            <div key={i} className='flex flex-col'>
              <h2 className='font-bold text-3xl md:text-3xl text-white my-6'>
                Serviço: {service.name}
              </h2>
              <span className='font-bold text-xl text-primary'>
                {service.activeShards} / {service.shards.length}
              </span>
              <span className='text-describe'>
                {service.problematicShards} / {service.shards.length} serviços tem problemas
              </span>
              <div className='flex flex-wrap gap-6 my-2'>
                {service.shards.map((shard) => (
                  <div
                    key={shard.id}
                    className={
                      'border-2 h-12 w-12 rounded flex text-center justify-center items-center font-bold text-2xl bg-secondary-bg text-white border-status-' +
                      shard.status
                    }
                  >
                    {shard.id}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
  const commands = await fetchCommands();

  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['status', 'common', 'header', 'footer'])),
      lang: locale ?? 'en',
      disabledCommands: commands.filter((c) => c.disabled?.isDisabled),
    },
    revalidate: 60,
  };
};

export default StatusPage;
