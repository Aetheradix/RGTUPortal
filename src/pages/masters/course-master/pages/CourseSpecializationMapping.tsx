import React from 'react';
import MasterCrudPage, { type MasterField } from '@/pages/masters/shared/MasterCrudPage';
import type { TableColumn } from '@/ui/shared';
import { actionsCol, statusCol } from '../sharedColumns';

export default function CourseSpecializationMapping() {
  const courseOptions = [
    { label: 'B.Sc.', value: 'BSC' },
    { label: 'M.Sc.', value: 'MSC' },
  ];
  const specializationOptions = [
    { label: 'Computer Science', value: 'CS' },
    { label: 'Mathematics', value: 'MATH' },
  ];

  const fields: MasterField<any>[] = [
    { kind: 'dropdown', name: 'course', label: 'Course', required: true, options: courseOptions },
    { kind: 'dropdown', name: 'specialization', label: 'Specialization', required: true, options: specializationOptions },
    { kind: 'checkbox', name: 'isActive', label: 'Active' },
  ];

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    { field: 'course', header: 'Course', sortable: true },
    { field: 'specialization', header: 'Specialization', sortable: true },
    statusCol,
    actionsCol,
  ];

  const rows = [
    { id: 1, course: 'BSC', specialization: 'CS', isActive: true },
    { id: 2, course: 'MSC', specialization: 'MATH', isActive: true },
  ];

  return (
    <MasterCrudPage
      title="Course and Specialization Mapping"
      tableTitle="Mapping List"
      defaultForm={{ course: 'BSC', specialization: 'CS', isActive: true }}
      fields={fields}
      rows={rows}
      columns={columns}
    />
  );
}




