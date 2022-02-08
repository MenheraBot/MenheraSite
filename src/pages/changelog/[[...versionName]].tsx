import type { GetStaticPaths, GetStaticProps } from 'next';

import { Flex } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { ChangelogMarkdown } from '../../components/changelog/changelog-markdown';
import { ChangelogSidebar } from '../../components/changelog/changelog-sidebar';

import Layout from '../../components/ui/layout';
import { fetchGithub } from '../../services/api/api';
import { ChangelogVersion, parseChangelog } from '../../services/changelogParser';

type Props = {
  versions: ChangelogVersion[];
  currentVersion: ChangelogVersion;
};

const ChangelogVersionPage = ({ currentVersion, versions }: Props): JSX.Element => {
  const { t } = useTranslation('changelog');

  return (
    <Layout title={t('title', { version: currentVersion.versionName })}>
      <Flex marginX='5' flexDir='row' overflow='hidden' maxW='2000px'>
        <ChangelogSidebar versions={versions} currentVersion={currentVersion.versionName} />
        <ChangelogMarkdown version={currentVersion} />
      </Flex>
    </Layout>
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
