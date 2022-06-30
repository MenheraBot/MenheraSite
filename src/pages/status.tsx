import { fetchDisabledCommands, fetchShardStatus } from '../services/api/api';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { Command, ShardData } from '../services/api/api.types';

import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';
import { SectionDivider } from '../components/common/SectionDivider';
import classnames from 'classnames';
import { SearchInput } from '../components/common/SearchInput';
import { useTranslation } from 'next-i18next';
import { useState, useEffect } from 'react';

type Props = {
  lang: string;
  disabledCommands: Command[];
  lastShardStatus: ShardData[];
};

type Status = 'success' | 'error' | 'warning';

interface StatusTextProps {
  children: React.ReactNode;
  status: Status;
}

/* Why not this?
Tailwind read the classnames before build, so it dont know what is the real classname

const statusColor = (status: Status, className: 'border' | 'bg' | 'text') =>
  status === 'success'
    ? `${className}-status-success`
    : status === 'error'
    ? `${className}-status-error`
    : `${className}-status-warning`;

*/
const bgColor = (status: Status) =>
  status === 'success'
    ? 'bg-status-success'
    : status === 'error'
    ? 'bg-status-error'
    : 'bg-status-warning';

const textColor = (status: Status) =>
  status === 'success'
    ? 'text-status-success'
    : status === 'error'
    ? 'text-status-error'
    : 'text-status-warning';

const borderColor = (status: Status) =>
  status === 'success'
    ? 'border-status-success'
    : status === 'error'
    ? 'border-status-error'
    : 'border-status-warning';

const StatusText = ({ children, status }: StatusTextProps) => {
  return (
    <div className='flex items-center'>
      <div className={classnames('h-4 w-5 rounded-full', bgColor(status))} />
      <span className={classnames('font-semibold ml-3', textColor(status))}>{children}</span>
    </div>
  );
};

function rand<A>(arr: A[]): A {
  return arr[Math.floor(Math.random() * arr.length)];
}

const services = [
  {
    name: 'Discord Bot',
    activeShards: 20,
    problematicShards: 10,
    shards: Array.from({ length: 30 }, (_, i) => ({
      id: i,
      cluster: 1,
      uptime: '1h',
      serverCount: 100,
      status: rand(['success', 'error', 'warning'] as Status[]),
      offlineServers: 0,
    })),
  },
];

const StatusPage = ({ disabledCommands, lastShardStatus }): JSX.Element => {
  const { t } = useTranslation('status');

  const [status, setStatus] = useState<ShardData[]>(lastShardStatus);

  useEffect(() => {
      const interval = setInterval(() => {
        const updatedStatus = await fetchShardStatus();

        setStatus(updatedStatus);
      }, 15_000)
      
      return () => clearInterval(interval)
  }, []);

  return (
    <>
      <Header />
      <SectionDivider title='Status' withoutSpace className='mt-10 mb-6 px-6' />
      <main className='mx-auto max-w-7xl px-6 pb-6'>
        <div className='md:flex flex-row'>
          <div>
            <h1 className='text-white my-4 text-4xl font-bold'>{t('active-services')}</h1>
            <p className='text-describe'>{t('services-description')}</p>
            <ul className='my-6 flex flex-col flex-wrap md:flex-row gap-3'>
              <li>
                <StatusText status='success'>{t('working-fine')}</StatusText>
              </li>
              <li>
                <StatusText status='warning'>{t('partial-outage')}</StatusText>
              </li>
              <li>
                <StatusText status='error'>{t('major-outage')}</StatusText>
              </li>
            </ul>
          </div>
          <SearchInput placeholder={t('server-id')} />
        </div>
        <div>
          {services.map((service, i) => (
            <div key={i} className='flex flex-col'>
              <h2 className='font-bold text-3xl md:text-3xl text-white my-6'>
                {t('service', { name: service.name })}
              </h2>
              <span className='text-describe'>
                {t('problems', {
                  problematics: service.problematicShards,
                  all: service.shards.length,
                  name: service.name,
                })}
              </span>
              <div className='flex flex-wrap gap-6 my-2'>
                {status.map((shard) => (
                  <div
                    key={shard.id}
                    className={classnames(
                      'border-2 h-12 w-12 rounded flex text-center justify-center items-center font-bold text-2xl bg-secondary-bg text-white',
                      borderColor('success'), //TODO
                    )}
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
  const disabledCommands = await fetchDisabledCommands();
  const lastShardStatus = await fetchShardStatus();

  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['status', 'header', 'footer'])),
      lang: locale as string,
      disabledCommands,
      lastShardStatus,
    },
    revalidate: 60,
  };
};

export default StatusPage;
