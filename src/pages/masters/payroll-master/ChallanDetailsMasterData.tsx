import MasterCrudPage, { type MasterField } from '@/pages/masters/shared/MasterCrudPage';
import type { TableColumn } from '@/ui/shared';
import { actionsCol, statusCol } from '../course-master/sharedColumns';

type ChallanForm = {
  challanCode: string;
  challanName: string;
  bankName: string;
  accountNo: string;
  isActive: boolean;
};

type ChallanRow = ChallanForm & { id: number };

export default function ChallanDetailsMasterData() {
  const fields: MasterField<ChallanForm>[] = [
    { kind: 'text', name: 'challanCode', label: 'Challan Code', required: true, toUpperCase: true, maxLength: 10 },
    { kind: 'text', name: 'challanName', label: 'Challan Name', required: true },
    { kind: 'text', name: 'bankName', label: 'Bank Name', required: true },
    { kind: 'text', name: 'accountNo', label: 'Account No.', required: true },
    { kind: 'checkbox', name: 'isActive', label: 'Active' },
  ];

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    { field: 'challanCode', header: 'Challan Code', sortable: true },
    { field: 'challanName', header: 'Challan Name', sortable: true },
    { field: 'bankName', header: 'Bank Name', sortable: true },
    { field: 'accountNo', header: 'Account No.', sortable: true },
    statusCol,
    actionsCol,
  ];

  const rows: ChallanRow[] = [
    { id: 1, challanCode: 'SAL', challanName: 'Salary Challan', bankName: 'SBI', accountNo: '1234567890', isActive: true },
    { id: 2, challanCode: 'PF', challanName: 'PF Challan', bankName: 'SBI', accountNo: '0987654321', isActive: true },
  ];

  return (
    <MasterCrudPage<ChallanForm, ChallanRow>
      title="Challan Details Master Data"
      tableTitle="Challan Details List"
      defaultForm={{
        challanCode: '',
        challanName: '',
        bankName: '',
        accountNo: '',
        isActive: true,
      }}
      fields={fields}
      rows={rows}
      columns={columns}
    />
  );
}


