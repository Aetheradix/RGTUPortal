import MasterCrudPage, { type MasterField } from '@/pages/masters/shared/MasterCrudPage';
import type { TableColumn } from '@/ui/shared';
import { actionsCol } from '../course-master/sharedColumns';

type AllEmployeeForm = {
  headCode: string;
  headName: string;
  amount: string;
  effectiveMonth: string;
};

type AllEmployeeRow = AllEmployeeForm & { id: number };

export default function AllEmployeeHeadWiseMaster() {
  const fields: MasterField<AllEmployeeForm>[] = [
    { kind: 'text', name: 'headCode', label: 'Head Code', required: true, toUpperCase: true, maxLength: 10 },
    { kind: 'text', name: 'headName', label: 'Head Name', required: true },
    { kind: 'text', name: 'amount', label: 'Same Amount for All Employees', required: true, placeholder: 'e.g. 500' },
    { kind: 'text', name: 'effectiveMonth', label: 'Effective From (Month/Year)', placeholder: 'MM/YYYY' },
  ];

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    { field: 'headCode', header: 'Head Code', sortable: true },
    { field: 'headName', header: 'Head Name', sortable: true },
    { field: 'amount', header: 'Amount', sortable: true },
    { field: 'effectiveMonth', header: 'Effective From', sortable: true },
    actionsCol,
  ];

  const rows: AllEmployeeRow[] = [
    { id: 1, headCode: 'WASH', headName: 'Washing Allowance', amount: '500', effectiveMonth: '04/2024' },
  ];

  return (
    <MasterCrudPage<AllEmployeeForm, AllEmployeeRow>
      title="Same Amount Set The All employee Head Wise"
      tableTitle="All Employee Same Amount Settings"
      defaultForm={{ headCode: '', headName: '', amount: '', effectiveMonth: '' }}
      fields={fields}
      rows={rows}
      columns={columns}
    />
  );
}


