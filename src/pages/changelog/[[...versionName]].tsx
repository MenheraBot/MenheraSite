import type { GetStaticPaths, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { ChangelogPage } from '../../components/changelog/changelog-page';
import { fetchGithub } from '../../services/api/api';
import { ChangelogVersion, parseChangelog } from '../../services/changelogParser';

type Props = {
  versions: ChangelogVersion[];
  currentVersion: ChangelogVersion;
};

const ChangelogVersionPage = ({ currentVersion, versions }: Props): JSX.Element => {
  // return <p>{currentVersion?.versionName}</p>;
  return <ChangelogPage currentVersion={currentVersion} versions={versions} />;
};

// export const getStaticProps: GetStaticPaths = async () => {

//   const log = await fetchGithub();
//   const versions = parseChangelog(log, 'pt-BR');

//   return {
//     paths: []
//   }
// }

export async function getStaticPaths() {
  console.log('atas');
  return { paths: [], fallback: true };
}

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
