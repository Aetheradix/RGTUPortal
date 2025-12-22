import MasterCrudPage, { type MasterField } from '@/pages/masters/shared/MasterCrudPage';
import type { TableColumn } from '@/ui/shared';
import { actionsCol, statusCol } from '../course-master/sharedColumns';

type PayCommissionForm = {
  commissionCode: string;
  commissionName: string;
  effectiveFrom: string;
  isActive: boolean;
};

type PayCommissionRow = PayCommissionForm & { id: number };

export default function PayCommissionMasterData() {
  const fields: MasterField<PayCommissionForm>[] = [
    { kind: 'text', name: 'commissionCode', label: 'Commission Code', required: true, toUpperCase: true, maxLength: 10 },
    { kind: 'text', name: 'commissionName', label: 'Commission Name', required: true },
    { kind: 'text', name: 'effectiveFrom', label: 'Effective From (Year)', placeholder: 'e.g. 2016', maxLength: 4 },
    { kind: 'checkbox', name: 'isActive', label: 'Active' },
  ];

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    { field: 'commissionCode', header: 'Code', sortable: true },
    { field: 'commissionName', header: 'Commission', sortable: true },
    { field: 'effectiveFrom', header: 'Effective From', sortable: true },
    statusCol,
    actionsCol,
  ];

  const rows: PayCommissionRow[] = [
    { id: 1, commissionCode: '6PC', commissionName: '6th Pay Commission', effectiveFrom: '2006', isActive: false },
    { id: 2, commissionCode: '7PC', commissionName: '7th Pay Commission', effectiveFrom: '2016', isActive: true },
  ];

  return (
    <MasterCrudPage<PayCommissionForm, PayCommissionRow>
      title="Pay Commission Master Data"
      tableTitle="Pay Commission List"
      defaultForm={{ commissionCode: '', commissionName: '', effectiveFrom: '', isActive: true }}
      fields={fields}
      rows={rows}
      columns={columns}
    />
  );
}


