import MasterCrudPage, { type MasterField } from '@/pages/masters/shared/MasterCrudPage';
import type { TableColumn } from '@/ui/shared';
import { actionsCol, statusCol } from '../sharedColumns';

export default function Level() {
  const fields: MasterField<any>[] = [
    { kind: 'text', name: 'levelCode', label: 'Level Code', required: true, toUpperCase: true, maxLength: 10 },
    { kind: 'text', name: 'levelName', label: 'Level Name', required: true, placeholder: 'e.g. UG / PG' },
    { kind: 'checkbox', name: 'isActive', label: 'Active' },
  ];

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    { field: 'levelCode', header: 'Level Code', sortable: true },
    { field: 'levelName', header: 'Level Name', sortable: true },
    statusCol,
    actionsCol,
  ];

  const rows = [
    { id: 1, levelCode: 'UG', levelName: 'Undergraduate', isActive: true },
    { id: 2, levelCode: 'PG', levelName: 'Postgraduate', isActive: true },
  ];

  return (
    <MasterCrudPage
      title="Level"
      tableTitle="Level List"
      defaultForm={{ levelCode: '', levelName: '', isActive: true }}
      fields={fields}
      rows={rows}
      columns={columns}
    />
  );
}


