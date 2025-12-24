import MasterCrudPage, { type MasterField } from '@/pages/masters/shared/MasterCrudPage';
import type { TableColumn } from '@/ui/shared';
import { actionsCol } from '../course-master/sharedColumns';

type ProcessStepForm = {
  stepNo: string;
  stepTitle: string;
  description: string;
};

type ProcessStepRow = ProcessStepForm & { id: number };

export default function ApplicationProcessPage() {
  const fields: MasterField<ProcessStepForm>[] = [
    { kind: 'text', name: 'stepNo', label: 'Step No.', required: true, maxLength: 2 },
    { kind: 'text', name: 'stepTitle', label: 'Step Title', required: true },
    { kind: 'text', name: 'description', label: 'Description', maxLength: 300 },
  ];

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    { field: 'stepNo', header: 'Step', sortable: true },
    { field: 'stepTitle', header: 'Step Title', sortable: true },
    { field: 'description', header: 'Description' },
    actionsCol,
  ];

  const rows: ProcessStepRow[] = [
    { id: 1, stepNo: '1', stepTitle: 'Fill Application Form', description: 'Student fills online grant application form.' },
    { id: 2, stepNo: '2', stepTitle: 'Upload Documents', description: 'Upload required documents for verification.' },
    { id: 3, stepNo: '3', stepTitle: 'Submit & Lock', description: 'Submit the application and lock changes.' },
  ];

  return (
    <MasterCrudPage<ProcessStepForm, ProcessStepRow>
      title="Grant Application Process"
      tableTitle="Application Process Steps"
      defaultForm={{ stepNo: '', stepTitle: '', description: '' }}
      fields={fields}
      rows={rows}
      columns={columns}
    />
  );
}


