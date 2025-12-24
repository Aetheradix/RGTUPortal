import MasterCrudPage, { type MasterField } from '@/pages/masters/shared/MasterCrudPage';
import type { TableColumn } from '@/ui/shared';
import { actionsCol, statusCol } from '../course-master/sharedColumns';

type QualificationForm = {
  qualificationCode: string;
  qualificationName: string;
  level: string;
  isActive: boolean;
};

type QualificationRow = QualificationForm & { id: number };

export default function QualificationMasterData() {
  const fields: MasterField<QualificationForm>[] = [
    { kind: 'text', name: 'qualificationCode', label: 'Qualification Code', required: true, toUpperCase: true, maxLength: 10 },
    { kind: 'text', name: 'qualificationName', label: 'Qualification Name', required: true },
    { kind: 'text', name: 'level', label: 'Level', placeholder: 'UG / PG / PhD' },
    { kind: 'checkbox', name: 'isActive', label: 'Active' },
  ];

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    { field: 'qualificationCode', header: 'Code', sortable: true },
    { field: 'qualificationName', header: 'Qualification', sortable: true },
    { field: 'level', header: 'Level', sortable: true },
    statusCol,
    actionsCol,
  ];

  const rows: QualificationRow[] = [
    { id: 1, qualificationCode: 'UG', qualificationName: 'Undergraduate', level: 'UG', isActive: true },
    { id: 2, qualificationCode: 'PG', qualificationName: 'Postgraduate', level: 'PG', isActive: true },
    { id: 3, qualificationCode: 'PHD', qualificationName: 'Doctorate', level: 'PhD', isActive: true },
  ];

  return (
    <MasterCrudPage<QualificationForm, QualificationRow>
      title="Qualification Master Data"
      tableTitle="Qualification Master List"
      defaultForm={{ qualificationCode: '', qualificationName: '', level: '', isActive: true }}
      fields={fields}
      rows={rows}
      columns={columns}
    />
  );
}


