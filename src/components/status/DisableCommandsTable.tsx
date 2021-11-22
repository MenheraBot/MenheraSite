import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import type { Command } from '../../services/api/api.types';
import Table, { Column } from '../ui/Table';

type Props = {
  disabledCommands: Command[];
};

const DisabledCommandsTable = ({ disabledCommands }: Props): JSX.Element => {
  const { t } = useTranslation('common');

  const columns = useMemo<Column<Command>[]>(
    () => [
      {
        Header: t('disabled-commands'),
        columns: [
          {
            Header: t('service'),
            accessor: 'name',
          },
          {
            Header: t('ping'),
            accessor: 'disabled.reason',
          },
        ],
      },
    ],
    [t],
  );

  return <Table columns={columns} data={disabledCommands} />;
};

export default DisabledCommandsTable;
