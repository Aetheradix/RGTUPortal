import MasterCrudPage, { type MasterField } from '@/pages/masters/shared/MasterCrudPage';
import type { TableColumn } from '@/ui/shared';
import { actionsCol, statusCol } from '../course-master/sharedColumns';

type PayScaleForm = {
  scaleCode: string;
  scaleName: string;
  minPay: string;
  maxPay: string;
  isActive: boolean;
};

type PayScaleRow = PayScaleForm & { id: number };

export default function PayScaleMasterData() {
  const fields: MasterField<PayScaleForm>[] = [
    { kind: 'text', name: 'scaleCode', label: 'Scale Code', required: true, toUpperCase: true, maxLength: 10 },
    { kind: 'text', name: 'scaleName', label: 'Scale Name', required: true },
    { kind: 'text', name: 'minPay', label: 'Min Basic Pay', placeholder: 'e.g. 15600' },
    { kind: 'text', name: 'maxPay', label: 'Max Basic Pay', placeholder: 'e.g. 39100' },
    { kind: 'checkbox', name: 'isActive', label: 'Active' },
  ];

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    { field: 'scaleCode', header: 'Scale Code', sortable: true },
    { field: 'scaleName', header: 'Scale Name', sortable: true },
    { field: 'minPay', header: 'Min Pay', sortable: true },
    { field: 'maxPay', header: 'Max Pay', sortable: true },
    statusCol,
    actionsCol,
  ];

  const rows: PayScaleRow[] = [
    { id: 1, scaleCode: 'UGC1', scaleName: 'UGC Scale 1', minPay: '15600', maxPay: '39100', isActive: true },
    { id: 2, scaleCode: 'UGC2', scaleName: 'UGC Scale 2', minPay: '37400', maxPay: '67000', isActive: true },
  ];

  return (
    <MasterCrudPage<PayScaleForm, PayScaleRow>
      title="Pay Scale Master Data"
      tableTitle="Pay Scale List"
      defaultForm={{ scaleCode: '', scaleName: '', minPay: '', maxPay: '', isActive: true }}
      fields={fields}
      rows={rows}
      columns={columns}
    />
  );
}


