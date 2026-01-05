import MasterCrudPage, { type MasterField } from '@/pages/masters/shared/MasterCrudPage';
import type { TableColumn } from '@/ui/shared';
import { actionsCol, statusCol } from '../course-master/sharedColumns';

type GrantTypeForm = {
  typeCode: string;
  typeName: string;
  description: string;
  isActive: boolean;
};

type GrantTypeRow = GrantTypeForm & { id: number };

export default function GrantTypeMaster() {
  const fields: MasterField<GrantTypeForm>[] = [
    { kind: 'text', name: 'typeCode', label: 'Grant Type Code', required: true, toUpperCase: true, maxLength: 10 },
    { kind: 'text', name: 'typeName', label: 'Grant Type Name', required: true },
    { kind: 'text', name: 'description', label: 'Description', maxLength: 200 },
    { kind: 'checkbox', name: 'isActive', label: 'Active' },
  ];

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    { field: 'typeCode', header: 'Type Code', sortable: true },
    { field: 'typeName', header: 'Type Name', sortable: true },
    { field: 'description', header: 'Description' },
    statusCol,
    actionsCol,
  ];

  const rows: GrantTypeRow[] = [
    { id: 1, typeCode: 'PLAN', typeName: 'Plan Grant', description: '', isActive: true },
    { id: 2, typeCode: 'NPLAN', typeName: 'Non-Plan Grant', description: '', isActive: true },
  ];

  return (
    <MasterCrudPage<GrantTypeForm, GrantTypeRow>
      title="Grant Type"
      tableTitle="Grant Type List"
      defaultForm={{ typeCode: '', typeName: '', description: '', isActive: true }}
      fields={fields}
      rows={rows}
      columns={columns}
    />
  );
}


