import MasterCrudPage, { type MasterField } from '@/pages/masters/shared/MasterCrudPage';
import type { TableColumn } from '@/ui/shared';
import { actionsCol, statusCol } from '../course-master/sharedColumns';

type SchemeDeptForm = {
  departmentCode: string;
  departmentName: string;
  level: string;
  isActive: boolean;
};

type SchemeDeptRow = SchemeDeptForm & { id: number };

export default function SchemeDepartmentMaster() {
  const fields: MasterField<SchemeDeptForm>[] = [
    { kind: 'text', name: 'departmentCode', label: 'Department Code', required: true, toUpperCase: true, maxLength: 10 },
    { kind: 'text', name: 'departmentName', label: 'Department Name', required: true },
    { kind: 'text', name: 'level', label: 'Level', placeholder: 'Central / State / University / College' },
    { kind: 'checkbox', name: 'isActive', label: 'Active' },
  ];

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    { field: 'departmentCode', header: 'Dept. Code', sortable: true },
    { field: 'departmentName', header: 'Department Name', sortable: true },
    { field: 'level', header: 'Level', sortable: true },
    statusCol,
    actionsCol,
  ];

  const rows: SchemeDeptRow[] = [
    { id: 1, departmentCode: 'SCHHO', departmentName: 'Scholarship HO', level: 'HO', isActive: true },
    { id: 2, departmentCode: 'SCHDIST', departmentName: 'Scholarship District', level: 'District', isActive: true },
  ];

  return (
    <MasterCrudPage<SchemeDeptForm, SchemeDeptRow>
      title="Scheme Department Master"
      tableTitle="Scheme Department List"
      defaultForm={{ departmentCode: '', departmentName: '', level: '', isActive: true }}
      fields={fields}
      rows={rows}
      columns={columns}
    />
  );
}


