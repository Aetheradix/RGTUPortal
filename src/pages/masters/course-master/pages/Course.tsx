import MasterCrudPage, { type MasterField } from '@/pages/masters/shared/MasterCrudPage';
import type { TableColumn } from '@/ui/shared';
import { actionsCol, statusCol } from '../sharedColumns';

export default function Course() {
  const levelOptions = [
    { label: 'Undergraduate (UG)', value: 'UG' },
    { label: 'Postgraduate (PG)', value: 'PG' },
  ];

  const fields: MasterField<any>[] = [
    { kind: 'dropdown', name: 'level', label: 'Level', required: true, options: levelOptions },
    { kind: 'text', name: 'courseCode', label: 'Course Code', required: true, toUpperCase: true, maxLength: 15 },
    { kind: 'text', name: 'courseName', label: 'Course Name', required: true },
    { kind: 'checkbox', name: 'isActive', label: 'Active' },
  ];

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    { field: 'level', header: 'Level', sortable: true },
    { field: 'courseCode', header: 'Course Code', sortable: true },
    { field: 'courseName', header: 'Course Name', sortable: true },
    statusCol,
    actionsCol,
  ];

  const rows = [
    { id: 1, level: 'UG', courseCode: 'BA', courseName: 'B.A.', isActive: true },
    { id: 2, level: 'UG', courseCode: 'BSC', courseName: 'B.Sc.', isActive: true },
    { id: 3, level: 'PG', courseCode: 'MSC', courseName: 'M.Sc.', isActive: true },
  ];

  return (
    <MasterCrudPage
      title="Course"
      tableTitle="Course List"
      defaultForm={{ level: 'UG', courseCode: '', courseName: '', isActive: true }}
      fields={fields}
      rows={rows}
      columns={columns}
    />
  );
}












