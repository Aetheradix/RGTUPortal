import MasterCrudPage, { type MasterField } from '@/pages/masters/shared/MasterCrudPage';
import type { TableColumn } from '@/ui/shared';
import { actionsCol, statusCol } from '../course-master/sharedColumns';

type FixedHeadForm = {
  headCode: string;
  headName: string;
  amount: string;
  isActive: boolean;
};

type FixedHeadRow = FixedHeadForm & { id: number };

export default function FixedHeadValueMaster() {
  const fields: MasterField<FixedHeadForm>[] = [
    { kind: 'text', name: 'headCode', label: 'Head Code', required: true, toUpperCase: true, maxLength: 10 },
    { kind: 'text', name: 'headName', label: 'Head Name', required: true },
    { kind: 'text', name: 'amount', label: 'Fixed Amount', required: true, placeholder: 'e.g. 1500' },
    { kind: 'checkbox', name: 'isActive', label: 'Active' },
  ];

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    { field: 'headCode', header: 'Head Code', sortable: true },
    { field: 'headName', header: 'Head Name', sortable: true },
    { field: 'amount', header: 'Amount', sortable: true },
    statusCol,
    actionsCol,
  ];

  const rows: FixedHeadRow[] = [
    { id: 1, headCode: 'HRAFIX', headName: 'Fixed HRA', amount: '1500', isActive: true },
    { id: 2, headCode: 'SPEC', headName: 'Special Allowance', amount: '2000', isActive: true },
  ];

  return (
    <MasterCrudPage<FixedHeadForm, FixedHeadRow>
      title="Set Earning & Deduction Value Head Wise"
      tableTitle="Fixed Head Values"
      defaultForm={{ headCode: '', headName: '', amount: '', isActive: true }}
      fields={fields}
      rows={rows}
      columns={columns}
    />
  );
}


