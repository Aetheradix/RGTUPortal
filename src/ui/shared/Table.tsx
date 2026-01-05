import { Column, type ColumnProps } from 'primereact/column';
import { DataTable, type DataTableProps } from 'primereact/datatable';
import { Paginator } from 'primereact/paginator';
import React, { useState } from 'react';

export interface TableColumn extends ColumnProps {
  field: string;
  header: string;
  sortable?: boolean;
  filter?: boolean;
  style?: React.CSSProperties;
  body?: (rowData: any) => React.ReactNode;
}

export interface TableProps extends Omit<DataTableProps<any>, 'paginator' | 'rows'> {
  columns: TableColumn[];
  data: any[];
  title?: string;
  showPagination?: boolean;
  rowsPerPage?: number;
  rowsPerPageOptions?: number[];
  paginationClassName?: string;
  emptyMessage?: string;
  loading?: boolean;
  onPageChange?: (event: { first: number; rows: number; page: number }) => void;
  onSort?: (event: any) => void;
  onFilter?: (event: any) => void;
}

const Table: React.FC<TableProps> = ({
  columns,
  data,
  title,
  showPagination = true,
  rowsPerPage = 10,
  rowsPerPageOptions = [10, 25, 50, 100],
  paginationClassName,
  emptyMessage = 'No records found',
  loading = false,
  onPageChange,
  onSort,
  onFilter,
  className,
  ...dataTableProps
}) => {
  const { cellSelection, ...restProps } = dataTableProps;
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(rowsPerPage);

  const handlePageChange = (event: { first: number; rows: number; page: number }) => {
    setFirst(event.first);
    setRows(event.rows);
    onPageChange?.(event);
  };

  const totalRecords = data.length;
  const currentPageData = showPagination
    ? data.slice(first, first + rows)
    : data;

  return (
    <div className="w-full">
      {title && (
        <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
      )}
      <DataTable
        value={currentPageData}
        loading={loading}
        emptyMessage={emptyMessage}
        className={`w-full ${className || ''}`}
        {...(cellSelection === true ? { ...restProps, cellSelection: true } : restProps)}
      >
        {columns.map((column, index) => (
          <Column
            key={column.field || index}
            {...column}
            headerStyle={{ whiteSpace: 'nowrap' }}
          />
        ))}
      </DataTable>

      {showPagination && totalRecords > 0 && (
        <div className={`mt-4 ${paginationClassName || ''}`}>
          <Paginator
            first={first}
            rows={rows}
            totalRecords={totalRecords}
            rowsPerPageOptions={rowsPerPageOptions}
            onPageChange={handlePageChange}
            template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
          />
        </div>
      )}
    </div>
  );
};

export default Table;
