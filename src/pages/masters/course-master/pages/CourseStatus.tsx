import React from 'react';
import MasterCrudPage, { type MasterField } from '@/pages/masters/shared/MasterCrudPage';
import type { TableColumn } from '@/ui/shared';
import { actionsCol, statusCol } from '../sharedColumns';

export default function CourseStatus() {
  const fields: MasterField<any>[] = [
    { kind: 'text', name: 'statusCode', label: 'Status Code', required: true, toUpperCase: true, maxLength: 10 },
    { kind: 'text', name: 'statusName', label: 'Status Name', required: true, placeholder: 'e.g. Open / Closed' },
    { kind: 'checkbox', name: 'isActive', label: 'Active' },
  ];

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    { field: 'statusCode', header: 'Status Code', sortable: true },
    { field: 'statusName', header: 'Status Name', sortable: true },
    statusCol,
    actionsCol,
  ];

  const rows = [
    { id: 1, statusCode: 'OPEN', statusName: 'Open', isActive: true },
    { id: 2, statusCode: 'CLOSED', statusName: 'Closed', isActive: true },
  ];

  return (
    <MasterCrudPage
      title="Course Status"
      tableTitle="Course Status List"
      defaultForm={{ statusCode: '', statusName: '', isActive: true }}
      fields={fields}
      rows={rows}
      columns={columns}
    />
  );
}







