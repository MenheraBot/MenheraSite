import type { GetStaticPaths, GetStaticProps } from 'next';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { fetchGithub } from '../../services/api/api';
import { ChangelogVersion, parseChangelog } from '../../services/changelogParser';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { Header } from '../../components/common/Header';
import { Footer } from '../../components/common/Footer';
import classNames from 'classnames';

type Props = {
  versions: ChangelogVersion[];
  currentVersion: ChangelogVersion;
};

interface ChangeLogSection {
  type: keyof ChangelogVersion['info'];
}

const ChangelogVersionPage = ({ currentVersion, versions }: Props): JSX.Element => {
  const { t } = useTranslation('changelog');

  function ChangeLogSection({ type }: ChangeLogSection) {
    const text = currentVersion.info[type];

    if (!text) return null;

    return (
      <div className='my-6 text-white'>
        <div className=' flex-1 border-b-2 border-separate-color mb-6'>
          <Link href={'#' + type}>
            <a id={type} className='text-white uppercase font-bold text-2xl'>
              {t(type)}
            </a>
          </Link>
        </div>
        <ReactMarkdown children={text} />
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className='container p-6 mx-auto max-w-7xl lg:flex flex-row gap-6'>
        <nav className='bg-secondary-bg py-11 px-4 mb-6 mt-10 w-full max-w-sm h-min'>
          <h2 className='text-white font-bold text-3xl md:text-4xl my-6'>Lista de Versões</h2>
          <ul className='mt-6 overflow-auto h-full max-h-96 w-full'>
            {versions.map((version) => (
              <li
                key={version.versionName}
                className='border-b-2 border-b-separate-color py-6 px-1 last:border-none'
              >
                <Link href={`/changelog/${version.versionName}`}>
                  <a
                    className={classNames('text-white hover:text-primary', {
                      'text-primary': version.versionName === currentVersion.versionName,
                    })}
                  >
                    {version.versionName}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {currentVersion && (
          <div className='bg-secondary-bg py-11 px-4 mb-6 mt-10 flex-1'>
            <h1 className='text-primary font-bold text-3xl md:text-4xl mt-6'>
              {t('title', { version: currentVersion?.versionName })}
            </h1>

            <small className='text-white'>
              {t('date')} {currentVersion.date}
            </small>
            <ChangeLogSection type='added' />
            <ChangeLogSection type='changed' />
            <ChangeLogSection type='security' />
            <ChangeLogSection type='fixed' />
            <ChangeLogSection type='hotfix' />
            <ChangeLogSection type='removed' />
            <ChangeLogSection type='deprecated' />
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  return { paths: [], fallback: true };
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale, params = {} }) => {
  const log = await fetchGithub();

  const versionName = params?.versionName?.[0] ?? 'latest';
  const versions = parseChangelog(log, locale ?? 'pt-BR');
  const lastVersion = versions[0];

  const currentVersion: ChangelogVersion =
    versionName === 'latest'
      ? lastVersion
      : versions.find((a) => a?.versionName === versionName) ?? lastVersion;

  return {
    props: {
      versions,
      currentVersion,
      ...(await serverSideTranslations(locale as string, ['changelog', 'header', 'footer'])),
    },
    revalidate: 500,
  };
};

export default ChangelogVersionPage;
