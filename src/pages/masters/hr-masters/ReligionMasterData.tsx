import MasterCrudPage, { type MasterField } from '@/pages/masters/shared/MasterCrudPage';
import type { TableColumn } from '@/ui/shared';
import { actionsCol, statusCol } from '../course-master/sharedColumns';

type ReligionForm = {
  religionCode: string;
  religionName: string;
  isActive: boolean;
};

type ReligionRow = ReligionForm & { id: number };

export default function ReligionMasterData() {
  const fields: MasterField<ReligionForm>[] = [
    { kind: 'text', name: 'religionCode', label: 'Religion Code', required: true, toUpperCase: true, maxLength: 10 },
    { kind: 'text', name: 'religionName', label: 'Religion Name', required: true },
    { kind: 'checkbox', name: 'isActive', label: 'Active' },
  ];

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    { field: 'religionCode', header: 'Code', sortable: true },
    { field: 'religionName', header: 'Religion', sortable: true },
    statusCol,
    actionsCol,
  ];

  const rows: ReligionRow[] = [
    { id: 1, religionCode: 'HIN', religionName: 'Hindu', isActive: true },
    { id: 2, religionCode: 'MUS', religionName: 'Muslim', isActive: true },
    { id: 3, religionCode: 'CHR', religionName: 'Christian', isActive: true },
  ];

  return (
    <MasterCrudPage<ReligionForm, ReligionRow>
      title="Religion Master Data"
      tableTitle="Religion Master List"
      defaultForm={{ religionCode: '', religionName: '', isActive: true }}
      fields={fields}
      rows={rows}
      columns={columns}
    />
  );
}


