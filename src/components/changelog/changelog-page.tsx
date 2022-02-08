import { Flex } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { ChangelogVersion } from '../../services/changelogParser';
import Layout from '../ui/layout';
import { ChangelogMarkdown } from './changelog-markdown';
import { ChangelogSidebar } from './changelog-sidebar';

type Props = {
  versions: ChangelogVersion[];
  currentVersion: ChangelogVersion;
};

export const ChangelogPage = ({ currentVersion, versions }: Props): JSX.Element => {
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
