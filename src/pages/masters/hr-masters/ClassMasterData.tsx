import MasterCrudPage, { type MasterField } from '@/pages/masters/shared/MasterCrudPage';
import type { TableColumn } from '@/ui/shared';
import { actionsCol, statusCol } from '../course-master/sharedColumns';

type ClassForm = {
  classCode: string;
  className: string;
  description: string;
  isActive: boolean;
};

type ClassRow = ClassForm & { id: number };

export default function ClassMasterData() {
  const fields: MasterField<ClassForm>[] = [
    { kind: 'text', name: 'classCode', label: 'Class Code', required: true, toUpperCase: true, maxLength: 10 },
    { kind: 'text', name: 'className', label: 'Class Name', required: true },
    { kind: 'text', name: 'description', label: 'Description', maxLength: 200 },
    { kind: 'checkbox', name: 'isActive', label: 'Active' },
  ];

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    { field: 'classCode', header: 'Class Code', sortable: true },
    { field: 'className', header: 'Class Name', sortable: true },
    { field: 'description', header: 'Description' },
    statusCol,
    actionsCol,
  ];

  const rows: ClassRow[] = [
    { id: 1, classCode: 'UG', className: 'Undergraduate', description: '', isActive: true },
    { id: 2, classCode: 'PG', className: 'Postgraduate', description: '', isActive: true },
  ];

  return (
    <MasterCrudPage<ClassForm, ClassRow>
      title="Class Master Data"
      tableTitle="Class Master List"
      defaultForm={{ classCode: '', className: '', description: '', isActive: true }}
      fields={fields}
      rows={rows}
      columns={columns}
    />
  );
}


