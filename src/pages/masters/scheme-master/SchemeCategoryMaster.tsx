import MasterCrudPage, { type MasterField } from '@/pages/masters/shared/MasterCrudPage';
import type { TableColumn } from '@/ui/shared';
import { actionsCol, statusCol } from '../course-master/sharedColumns';

type SchemeCategoryForm = {
  categoryCode: string;
  categoryName: string;
  level: string;
  isActive: boolean;
};

type SchemeCategoryRow = SchemeCategoryForm & { id: number };

export default function SchemeCategoryMaster() {
  const fields: MasterField<SchemeCategoryForm>[] = [
    { kind: 'text', name: 'categoryCode', label: 'Category Code', required: true, toUpperCase: true, maxLength: 10 },
    { kind: 'text', name: 'categoryName', label: 'Category Name', required: true },
    { kind: 'text', name: 'level', label: 'Level', placeholder: 'Central / State / UGC' },
    { kind: 'checkbox', name: 'isActive', label: 'Active' },
  ];

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    { field: 'categoryCode', header: 'Category Code', sortable: true },
    { field: 'categoryName', header: 'Category Name', sortable: true },
    { field: 'level', header: 'Level', sortable: true },
    statusCol,
    actionsCol,
  ];

  const rows: SchemeCategoryRow[] = [
    { id: 1, categoryCode: 'CENT', categoryName: 'Central', level: 'Central', isActive: true },
    { id: 2, categoryCode: 'STATE', categoryName: 'State', level: 'State', isActive: true },
    { id: 3, categoryCode: 'UGC', categoryName: 'UGC', level: 'UGC', isActive: true },
  ];

  return (
    <MasterCrudPage<SchemeCategoryForm, SchemeCategoryRow>
      title="Scheme Category Master (Central, State, UGC)"
      tableTitle="Scheme Category List"
      defaultForm={{ categoryCode: '', categoryName: '', level: '', isActive: true }}
      fields={fields}
      rows={rows}
      columns={columns}
    />
  );
}


