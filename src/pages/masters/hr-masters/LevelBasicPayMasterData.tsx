import MasterCrudPage, { type MasterField } from '@/pages/masters/shared/MasterCrudPage';
import type { TableColumn } from '@/ui/shared';
import { actionsCol, statusCol } from '../course-master/sharedColumns';

type LevelBasicPayForm = {
  levelCode: string;
  cellNo: string;
  basicPay: string;
  isActive: boolean;
};

type LevelBasicPayRow = LevelBasicPayForm & { id: number };

export default function LevelBasicPayMasterData() {
  const fields: MasterField<LevelBasicPayForm>[] = [
    { kind: 'text', name: 'levelCode', label: 'Level Code', required: true, toUpperCase: true, maxLength: 10 },
    { kind: 'text', name: 'cellNo', label: 'Cell No.', required: true, maxLength: 3 },
    { kind: 'text', name: 'basicPay', label: 'Basic Pay', required: true, placeholder: 'e.g. 57700' },
    { kind: 'checkbox', name: 'isActive', label: 'Active' },
  ];

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    { field: 'levelCode', header: 'Level Code', sortable: true },
    { field: 'cellNo', header: 'Cell No.', sortable: true },
    { field: 'basicPay', header: 'Basic Pay', sortable: true },
    statusCol,
    actionsCol,
  ];

  const rows: LevelBasicPayRow[] = [
    { id: 1, levelCode: 'L10', cellNo: '1', basicPay: '57700', isActive: true },
    { id: 2, levelCode: 'L10', cellNo: '2', basicPay: '59500', isActive: true },
  ];

  return (
    <MasterCrudPage<LevelBasicPayForm, LevelBasicPayRow>
      title="Level Basic Pay Master Data"
      tableTitle="Level Basic Pay Matrix"
      defaultForm={{ levelCode: '', cellNo: '', basicPay: '', isActive: true }}
      fields={fields}
      rows={rows}
      columns={columns}
    />
  );
}


