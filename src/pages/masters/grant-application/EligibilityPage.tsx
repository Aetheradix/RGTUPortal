import MasterCrudPage, { type MasterField } from '@/pages/masters/shared/MasterCrudPage';
import type { TableColumn } from '@/ui/shared';
import { actionsCol } from '../course-master/sharedColumns';

type EligibilityForm = {
  ruleCode: string;
  ruleTitle: string;
  description: string;
};

type EligibilityRow = EligibilityForm & { id: number };

export default function EligibilityPage() {
  const fields: MasterField<EligibilityForm>[] = [
    { kind: 'text', name: 'ruleCode', label: 'Rule Code', required: true, toUpperCase: true, maxLength: 10 },
    { kind: 'text', name: 'ruleTitle', label: 'Rule Title', required: true },
    { kind: 'text', name: 'description', label: 'Description', maxLength: 300 },
  ];

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    { field: 'ruleCode', header: 'Rule Code', sortable: true },
    { field: 'ruleTitle', header: 'Rule Title', sortable: true },
    { field: 'description', header: 'Description' },
    actionsCol,
  ];

  const rows: EligibilityRow[] = [
    { id: 1, ruleCode: 'ATT', ruleTitle: 'Attendance >= 75%', description: 'Student must have minimum 75% attendance.' },
    { id: 2, ruleCode: 'GRADE', ruleTitle: 'Minimum Grade', description: 'Student must have at least 60% marks.' },
  ];

  return (
    <MasterCrudPage<EligibilityForm, EligibilityRow>
      title="Grant Eligibility"
      tableTitle="Eligibility Rules"
      defaultForm={{ ruleCode: '', ruleTitle: '', description: '' }}
      fields={fields}
      rows={rows}
      columns={columns}
    />
  );
}


