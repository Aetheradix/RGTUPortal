import MasterCrudPage, { type MasterField } from '@/pages/masters/shared/MasterCrudPage';
import type { TableColumn } from '@/ui/shared';
import { actionsCol, statusCol } from '../sharedColumns';

export default function Category() {
  const fields: MasterField<any>[] = [
    { kind: 'text', name: 'categoryCode', label: 'Category Code', required: true, toUpperCase: true, maxLength: 10 },
    { kind: 'text', name: 'categoryName', label: 'Category Name', required: true },
    { kind: 'checkbox', name: 'isActive', label: 'Active' },
  ];

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    { field: 'categoryCode', header: 'Category Code', sortable: true },
    { field: 'categoryName', header: 'Category Name', sortable: true },
    statusCol,
    actionsCol,
  ];

  const rows = [
    { id: 1, categoryCode: 'GEN', categoryName: 'General', isActive: true },
    { id: 2, categoryCode: 'OBC', categoryName: 'OBC', isActive: true },
    { id: 3, categoryCode: 'SC', categoryName: 'SC', isActive: false },
  ];

  return (
    <MasterCrudPage
      title="Category"
      tableTitle="Category List"
      defaultForm={{ categoryCode: '', categoryName: '', isActive: true }}
      fields={fields}
      rows={rows}
      columns={columns}
    />
  );
}


