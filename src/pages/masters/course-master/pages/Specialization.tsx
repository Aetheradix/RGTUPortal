import React from 'react';
import MasterCrudPage, { type MasterField } from '@/pages/masters/shared/MasterCrudPage';
import type { TableColumn } from '@/ui/shared';
import { actionsCol, statusCol } from '../sharedColumns';

export default function Specialization() {
  const courseOptions = [
    { label: 'B.Sc.', value: 'BSC' },
    { label: 'M.Sc.', value: 'MSC' },
  ];

  const fields: MasterField<any>[] = [
    { kind: 'dropdown', name: 'course', label: 'Course', required: true, options: courseOptions },
    {
      kind: 'text',
      name: 'specializationCode',
      label: 'Specialization Code',
      required: true,
      toUpperCase: true,
      maxLength: 15,
    },
    { kind: 'text', name: 'specializationName', label: 'Specialization Name', required: true },
    { kind: 'checkbox', name: 'isActive', label: 'Active' },
  ];

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    { field: 'course', header: 'Course', sortable: true },
    { field: 'specializationCode', header: 'Specialization Code', sortable: true },
    { field: 'specializationName', header: 'Specialization Name', sortable: true },
    statusCol,
    actionsCol,
  ];

  const rows = [
    { id: 1, course: 'BSC', specializationCode: 'CS', specializationName: 'Computer Science', isActive: true },
    { id: 2, course: 'MSC', specializationCode: 'MATH', specializationName: 'Mathematics', isActive: true },
  ];

  return (
    <MasterCrudPage
      title="Specialization"
      tableTitle="Specialization List"
      defaultForm={{ course: 'BSC', specializationCode: '', specializationName: '', isActive: true }}
      fields={fields}
      rows={rows}
      columns={columns}
    />
  );
}







