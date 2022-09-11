import { fetchShardStatus } from '../services/api/api';
import dayjs from 'dayjs';
import dayjsDuration from 'dayjs/plugin/duration';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { ShardData } from '../services/api/api.types';

import { SectionDivider } from '../components/common/SectionDivider';
import classnames from 'classnames';
import { useTranslation } from 'next-i18next';
import useSWR from 'swr';
import Layout from '../components/PageLayout';

dayjs.extend(dayjsDuration);

type Props = {
  lang: string;
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

const ShardTooltip = ({ children, shard }: { children: React.ReactNode; shard: ShardData }) => {
  const { t } = useTranslation('status');

  return (
    <div className='relative flex flex-col items-center group'>
      {children}
      <div className='absolute bottom-7 flex-col items-center hidden mb-6 group-hover:flex text-left'>
        <span className='relative z-10 p-2 min-w-max leading-none text-white whitespace-no-wrap bg-primary-bg shadow-lg rounded-md'>
          <div className='text-primary font-bold text-lg mb-1'>Shard {shard.id}</div>
          <div className='text-white border-b-2 border-b-separate-color pb-1'>
            Cluster: <span className='text-describe'>{shard.clusterId}</span>
          </div>
          <div className='text-white border-b-2 last:border-none border-b-separate-color pb-1 pt-2'>
            Ping: <span className='text-describe'>{shard.ping}ms</span>
          </div>
          <div className='text-white border-b-2 last:border-none border-b-separate-color pb-1 pt-2'>
            Uptime:{' '}
            <span className='text-describe'>
              {dayjs.duration(shard.uptime).format('DD[d], HH[h], mm[m], ss[s]')}
            </span>
          </div>
          <div className='text-white border-b-2 last:border-none border-b-separate-color pb-1 pt-2'>
            {t('servers')} <span className='text-describe'>{shard.guilds}</span>
          </div>
          <div className='text-white border-b-2 last:border-none border-b-separate-color pb-1 pt-2'>
            {t('unavailable')} <span className='text-describe'>{shard.unavailable}</span>
          </div>
          <div className='text-white border-b-2 last:border-none border-b-separate-color pb-1 pt-2'>
            {t('users')} <span className='text-describe'>{shard.members}</span>
          </div>
        </span>
        <div className='w-3 h-3 -mt-2 rotate-45 bg-primary-bg' />
      </div>
    </div>
  );
};

const getStatusColor = (shard: ShardData): Status => {
  if (shard.isOff) return 'error';
  if (shard.unavailable > 0) return 'warning';
  if (shard.ping > 100) return 'warning';
  if (shard.ping > 500) return 'error';
  return 'success';
};

const StatusPage = ({ lastShardStatus }: Props): JSX.Element => {
  const { t } = useTranslation('status');

  const { data: shardsData } = useSWR<ShardData[]>('/info/shards', {
    fetcher: fetchShardStatus,
    refreshInterval: 15_000,
    errorRetryCount: 3,
    fallbackData: lastShardStatus,
  }); 

  return (
    <Layout page='status'>
      <SectionDivider title='Status' withoutSpace className='mt-10 mb-6 px-6' />
      <main className='mx-auto max-w-6xl px-6 pb-6'>
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
        </div>
        <div>
          <div className='flex flex-col'>
            <h2 className='font-bold text-3xl md:text-3xl text-white my-6'>
              {t('service', { name: 'Menhera Bot' })}
            </h2>
            <span className='text-describe'>
              {t('problems', {
                problematics: shardsData?.filter((s) => s.isOff).length ?? 0,
                all: shardsData?.length,
                name: t('shards'),
              })}
            </span>
            <div className='flex flex-wrap gap-6 my-2'>
              {shardsData &&
                shardsData.map((shard) => (
                  <ShardTooltip key={`${shard.id}-tooltip`} shard={shard}>
                    <div
                      key={`${shard.id}-shard`}
                      className={classnames(
                        'border-2 h-12 w-12 rounded flex text-center justify-center items-center font-bold text-2xl bg-secondary-bg text-white',
                        borderColor(getStatusColor(shard)),
                      )}
                    >
                      {shard.id}
                    </div>
                  </ShardTooltip>
                ))}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
  const lastShardStatus = await fetchShardStatus();

  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['status', 'header', 'footer'])),
      lang: locale as string,
      lastShardStatus,
    },
   // revalidate: 15,
  };
};

export default StatusPage;
