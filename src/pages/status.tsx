import { useTranslation } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';

import { Container, Heading, Spacer, VStack } from '@chakra-ui/react';

import { fetchCommands, fetchStatus } from '../services/api/api';

import DisabledCommandsTable from '../components/status/DisableCommandsTable';
import PingTable from '../components/status/PingTable';
import Layout from '../components/ui/layout';

import { Command, Shard } from '../services/api/api.types';

type Props = {
  shards: Shard[];
  disabledCommands: Command[];
};

const StatusPage = ({ disabledCommands, shards }: Props): JSX.Element => {
  const { t } = useTranslation('status');

  return (
    <Layout title={t('title')}>
      <Container maxW='container.lg' py={14} minH='container.sm'>
        <Heading>Status</Heading>
        <VStack>
          {shards.length > 0 && <PingTable shards={shards} />}
          <Spacer />
          {disabledCommands.length > 0 && (
            <DisabledCommandsTable disabledCommands={disabledCommands} />
          )}
        </VStack>
      </Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
  const shards = await fetchStatus();
  const commands = await fetchCommands();

  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['status', 'common', 'header', 'footer'])),
      shards,
      disabledCommands: commands.filter((c) => c.disabled?.isDisabled),
    },
    revalidate: 15,
  };
};

export default StatusPage;
