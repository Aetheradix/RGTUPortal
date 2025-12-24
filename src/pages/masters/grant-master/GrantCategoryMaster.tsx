import MasterCrudPage, { type MasterField } from '@/pages/masters/shared/MasterCrudPage';
import type { TableColumn } from '@/ui/shared';
import { actionsCol, statusCol } from '../course-master/sharedColumns';

type GrantCategoryForm = {
  categoryCode: string;
  categoryName: string;
  description: string;
  isActive: boolean;
};

type GrantCategoryRow = GrantCategoryForm & { id: number };

export default function GrantCategoryMaster() {
  const fields: MasterField<GrantCategoryForm>[] = [
    { kind: 'text', name: 'categoryCode', label: 'Grant Category Code', required: true, toUpperCase: true, maxLength: 10 },
    { kind: 'text', name: 'categoryName', label: 'Grant Category Name', required: true },
    { kind: 'text', name: 'description', label: 'Description', maxLength: 200 },
    { kind: 'checkbox', name: 'isActive', label: 'Active' },
  ];

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    { field: 'categoryCode', header: 'Category Code', sortable: true },
    { field: 'categoryName', header: 'Category Name', sortable: true },
    { field: 'description', header: 'Description' },
    statusCol,
    actionsCol,
  ];

  const rows: GrantCategoryRow[] = [
    { id: 1, categoryCode: 'CAP', categoryName: 'Capital', description: '', isActive: true },
    { id: 2, categoryCode: 'REV', categoryName: 'Revenue', description: '', isActive: true },
  ];

  return (
    <MasterCrudPage<GrantCategoryForm, GrantCategoryRow>
      title="Grant Category"
      tableTitle="Grant Category List"
      defaultForm={{ categoryCode: '', categoryName: '', description: '', isActive: true }}
      fields={fields}
      rows={rows}
      columns={columns}
    />
  );
}


