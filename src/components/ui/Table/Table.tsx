/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable react/jsx-key */
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { Column as TableColumn, useTable } from 'react-table';

export type Column<D extends object> = TableColumn<D>;

type Props<D extends object> = {
  columns: Column<D>[];
  data: D[];
};

const TableComponent = <D extends object>({ columns, data }: Props<D>): JSX.Element => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  return (
    <Table {...getTableProps()}>
      <Thead>
        {headerGroups.map((headerGroup) => (
          <Tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <Th {...column.getHeaderProps()}>{column.render('Header')}</Th>
            ))}
          </Tr>
        ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <Tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
              ))}
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default TableComponent;
