import MasterCrudPage, { type MasterField } from '@/pages/masters/shared/MasterCrudPage';
import type { TableColumn } from '@/ui/shared';
import { actionsCol, statusCol } from '../course-master/sharedColumns';

type GradePayForm = {
  gradeCode: string;
  gradeAmount: string;
  description: string;
  isActive: boolean;
};

type GradePayRow = GradePayForm & { id: number };

export default function GradePayMasterData() {
  const fields: MasterField<GradePayForm>[] = [
    { kind: 'text', name: 'gradeCode', label: 'Grade Pay Code', required: true, toUpperCase: true, maxLength: 10 },
    { kind: 'text', name: 'gradeAmount', label: 'Grade Pay Amount', required: true, placeholder: 'e.g. 6000' },
    { kind: 'text', name: 'description', label: 'Description', maxLength: 200 },
    { kind: 'checkbox', name: 'isActive', label: 'Active' },
  ];

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    { field: 'gradeCode', header: 'Code', sortable: true },
    { field: 'gradeAmount', header: 'Amount', sortable: true },
    { field: 'description', header: 'Description' },
    statusCol,
    actionsCol,
  ];

  const rows: GradePayRow[] = [
    { id: 1, gradeCode: 'GP6000', gradeAmount: '6000', description: '', isActive: true },
    { id: 2, gradeCode: 'GP7000', gradeAmount: '7000', description: '', isActive: true },
  ];

  return (
    <MasterCrudPage<GradePayForm, GradePayRow>
      title="Grade Pay Master Data"
      tableTitle="Grade Pay List"
      defaultForm={{ gradeCode: '', gradeAmount: '', description: '', isActive: true }}
      fields={fields}
      rows={rows}
      columns={columns}
    />
  );
}


