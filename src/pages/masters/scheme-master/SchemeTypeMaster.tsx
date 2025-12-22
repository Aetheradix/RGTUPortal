import MasterCrudPage, { type MasterField } from '@/pages/masters/shared/MasterCrudPage';
import type { TableColumn } from '@/ui/shared';
import { actionsCol, statusCol } from '../course-master/sharedColumns';

type SchemeTypeForm = {
  typeCode: string;
  typeName: string;
  description: string;
  isActive: boolean;
};

type SchemeTypeRow = SchemeTypeForm & { id: number };

export default function SchemeTypeMaster() {
  const fields: MasterField<SchemeTypeForm>[] = [
    { kind: 'text', name: 'typeCode', label: 'Scheme Type Code', required: true, toUpperCase: true, maxLength: 10 },
    { kind: 'text', name: 'typeName', label: 'Scheme Type Name', required: true },
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

  const rows: SchemeTypeRow[] = [
    { id: 1, typeCode: 'MERIT', typeName: 'Merit Based', description: '', isActive: true },
    { id: 2, typeCode: 'NEED', typeName: 'Need Based', description: '', isActive: true },
  ];

  return (
    <MasterCrudPage<SchemeTypeForm, SchemeTypeRow>
      title="Scheme Type Master"
      tableTitle="Scheme Type List"
      defaultForm={{ typeCode: '', typeName: '', description: '', isActive: true }}
      fields={fields}
      rows={rows}
      columns={columns}
    />
  );
}


