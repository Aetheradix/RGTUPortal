import MasterCrudPage, { type MasterField } from '@/pages/masters/shared/MasterCrudPage';
import type { TableColumn } from '@/ui/shared';
import { actionsCol, statusCol } from '../course-master/sharedColumns';

type LoanForm = {
  loanCode: string;
  loanName: string;
  maxAmount: string;
  maxInstallments: string;
  isActive: boolean;
};

type LoanRow = LoanForm & { id: number };

export default function LoanMasterData() {
  const fields: MasterField<LoanForm>[] = [
    { kind: 'text', name: 'loanCode', label: 'Loan Code', required: true, toUpperCase: true, maxLength: 10 },
    { kind: 'text', name: 'loanName', label: 'Loan Name', required: true },
    { kind: 'text', name: 'maxAmount', label: 'Max Amount', placeholder: 'e.g. 200000' },
    { kind: 'text', name: 'maxInstallments', label: 'Max Installments', placeholder: 'e.g. 60' },
    { kind: 'checkbox', name: 'isActive', label: 'Active' },
  ];

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    { field: 'loanCode', header: 'Loan Code', sortable: true },
    { field: 'loanName', header: 'Loan Name', sortable: true },
    { field: 'maxAmount', header: 'Max Amount', sortable: true },
    { field: 'maxInstallments', header: 'Max Installments', sortable: true },
    statusCol,
    actionsCol,
  ];

  const rows: LoanRow[] = [
    { id: 1, loanCode: 'HBA', loanName: 'House Building Advance', maxAmount: '2000000', maxInstallments: '120', isActive: true },
    { id: 2, loanCode: 'VEH', loanName: 'Vehicle Loan', maxAmount: '800000', maxInstallments: '84', isActive: true },
  ];

  return (
    <MasterCrudPage<LoanForm, LoanRow>
      title="Loan Master Data"
      tableTitle="Loan Master List"
      defaultForm={{ loanCode: '', loanName: '', maxAmount: '', maxInstallments: '', isActive: true }}
      fields={fields}
      rows={rows}
      columns={columns}
    />
  );
}


