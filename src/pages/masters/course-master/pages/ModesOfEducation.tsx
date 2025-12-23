import MasterCrudPage, { type MasterField } from '@/pages/masters/shared/MasterCrudPage';
import type { TableColumn } from '@/ui/shared';
import { actionsCol, statusCol } from '../sharedColumns';

export default function ModesOfEducation() {
  const fields: MasterField<any>[] = [
    { kind: 'text', name: 'modeCode', label: 'Mode Code', required: true, toUpperCase: true, maxLength: 10 },
    { kind: 'text', name: 'modeName', label: 'Mode Name', required: true, placeholder: 'e.g. Regular / Private' },
    { kind: 'checkbox', name: 'isActive', label: 'Active' },
  ];

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    { field: 'modeCode', header: 'Mode Code', sortable: true },
    { field: 'modeName', header: 'Mode Name', sortable: true },
    statusCol,
    actionsCol,
  ];

  const rows = [
    { id: 1, modeCode: 'REG', modeName: 'Regular', isActive: true },
    { id: 2, modeCode: 'PRV', modeName: 'Private', isActive: true },
  ];

  return (
    <MasterCrudPage
      title="Modes of Education"
      tableTitle="Modes List"
      defaultForm={{ modeCode: '', modeName: '', isActive: true }}
      fields={fields}
      rows={rows}
      columns={columns}
    />
  );
}












