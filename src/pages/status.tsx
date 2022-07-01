import { fetchShardStatus } from '../services/api/api';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { ShardData } from '../services/api/api.types';

import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';
import { SectionDivider } from '../components/common/SectionDivider';
import classnames from 'classnames';
import { SearchInput } from '../components/common/SearchInput';
import { useTranslation } from 'next-i18next';
import useSWR from 'swr';

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
                  <div
                    key={shard.id}
                    className={classnames(
                      'border-2 h-12 w-12 rounded flex text-center justify-center items-center font-bold text-2xl bg-secondary-bg text-white',
                      borderColor(getStatusColor(shard)), //TODO
                    )}
                  >
                    {shard.id}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
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
    revalidate: 15,
  };
};

export default StatusPage;
