import Table, { Column } from '../ui/Table';

import { useTranslation } from 'react-i18next';
import { Shard } from '../../services/api/api.types';
import { useMemo } from 'react';
import { chakra } from '@chakra-ui/react';
import moment from 'moment';

type Props = {
  shards: Shard[];
};

const LOW_PING_THRESHOLD = 80;

const formatUptime = (uptime: number) =>
  moment.utc(Date.now() + uptime).format('D[d], H[h], m[m], s[s]');

const OffCell = () => <chakra.span color='red.500'>OFF</chakra.span>;

const PingTable = ({ shards }: Props): JSX.Element => {
  const { t } = useTranslation('status');
  const { t: tc } = useTranslation('common');

  const columns = useMemo<Column<Shard>[]>(
    () => [
      {
        Header: t('title'),
        columns: [
          {
            Header: tc('service'),
            accessor: 'id',
            Cell: ({ value }) => `${tc('shard')} ${value}`,
          },
          {
            Header: tc('ping'),
            accessor: 'ping',
            Cell: ({ value, row }) => {
              if (row.original.isOff) return <OffCell />;
              return (
                <chakra.span color={value > LOW_PING_THRESHOLD ? 'yellow.500' : 'yellowgreen'}>
                  {value}ms
                </chakra.span>
              );
            },
          },
          {
            Header: tc('guilds'),
            accessor: 'guilds',
            Cell: ({ value, row }) => {
              if (row.original.isOff) return <OffCell />;
              return <chakra.span>{value}</chakra.span>;
            },
          },
          {
            Header: 'Users',
            accessor: 'members',
            Cell: ({ value, row }) => {
              if (row.original.isOff) return <OffCell />;
              return <chakra.span>{value}</chakra.span>;
            },
          },
          {
            Header: tc('uptime'),
            accessor: 'uptime',
            Cell: ({ value, row }) => {
              if (row.original.isOff) return <OffCell />;
              return <chakra.span color='green.500'>{formatUptime(value)}</chakra.span>;
            },
          },
        ],
      },
    ],
    [t, tc],
  );

  return <Table columns={columns} data={shards} />;
};

export default PingTable;
