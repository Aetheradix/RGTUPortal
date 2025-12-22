import MasterCrudPage, { type MasterField } from '@/pages/masters/shared/MasterCrudPage';
import type { TableColumn } from '@/ui/shared';
import { actionsCol, statusCol } from '../course-master/sharedColumns';

type BloodForm = {
  bloodGroupCode: string;
  bloodGroupName: string;
  isActive: boolean;
};

type BloodRow = BloodForm & { id: number };

export default function BloodMasterData() {
  const fields: MasterField<BloodForm>[] = [
    { kind: 'text', name: 'bloodGroupCode', label: 'Blood Group Code', required: true, toUpperCase: true, maxLength: 5 },
    { kind: 'text', name: 'bloodGroupName', label: 'Blood Group', required: true },
    { kind: 'checkbox', name: 'isActive', label: 'Active' },
  ];

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    { field: 'bloodGroupCode', header: 'Code', sortable: true },
    { field: 'bloodGroupName', header: 'Blood Group', sortable: true },
    statusCol,
    actionsCol,
  ];

  const rows: BloodRow[] = [
    { id: 1, bloodGroupCode: 'A+', bloodGroupName: 'A Positive', isActive: true },
    { id: 2, bloodGroupCode: 'A-', bloodGroupName: 'A Negative', isActive: true },
    { id: 3, bloodGroupCode: 'B+', bloodGroupName: 'B Positive', isActive: true },
  ];

  return (
    <MasterCrudPage<BloodForm, BloodRow>
      title="Blood Master Data"
      tableTitle="Blood Group List"
      defaultForm={{ bloodGroupCode: '', bloodGroupName: '', isActive: true }}
      fields={fields}
      rows={rows}
      columns={columns}
    />
  );
}


