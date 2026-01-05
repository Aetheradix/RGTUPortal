import MasterCrudPage, { type MasterField } from '@/pages/masters/shared/MasterCrudPage';
import type { TableColumn } from '@/ui/shared';
import { actionsCol, statusCol } from '../course-master/sharedColumns';

type SchemeForm = {
  schemeCode: string;
  schemeName: string;
  department: string;
  category: string;
  isActive: boolean;
};

type SchemeRow = SchemeForm & { id: number };

export default function SchemeMasterPage() {
  const fields: MasterField<SchemeForm>[] = [
    { kind: 'text', name: 'schemeCode', label: 'Scheme Code', required: true, toUpperCase: true, maxLength: 15 },
    { kind: 'text', name: 'schemeName', label: 'Scheme Name', required: true },
    { kind: 'text', name: 'department', label: 'Department', placeholder: 'e.g. Higher Education' },
    { kind: 'text', name: 'category', label: 'Category', placeholder: 'Central / State / UGC' },
    { kind: 'checkbox', name: 'isActive', label: 'Active' },
  ];

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    { field: 'schemeCode', header: 'Scheme Code', sortable: true },
    { field: 'schemeName', header: 'Scheme Name', sortable: true },
    { field: 'department', header: 'Department', sortable: true },
    { field: 'category', header: 'Category', sortable: true },
    statusCol,
    actionsCol,
  ];

  const rows: SchemeRow[] = [
    { id: 1, schemeCode: 'SCH-GEN', schemeName: 'General Scholarship', department: 'Higher Education', category: 'State', isActive: true },
    { id: 2, schemeCode: 'SCH-SC', schemeName: 'SC Scholarship', department: 'Higher Education', category: 'Central', isActive: true },
  ];

  return (
    <MasterCrudPage<SchemeForm, SchemeRow>
      title="Scheme Master"
      tableTitle="Scheme Master List"
      defaultForm={{ schemeCode: '', schemeName: '', department: '', category: '', isActive: true }}
      fields={fields}
      rows={rows}
      columns={columns}
    />
  );
}


