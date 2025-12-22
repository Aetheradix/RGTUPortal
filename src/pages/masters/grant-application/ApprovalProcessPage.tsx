import MasterCrudPage, { type MasterField } from '@/pages/masters/shared/MasterCrudPage';
import type { TableColumn } from '@/ui/shared';
import { actionsCol } from '../course-master/sharedColumns';

type ApprovalStepForm = {
  level: string;
  role: string;
  action: string;
};

type ApprovalStepRow = ApprovalStepForm & { id: number };

export default function ApprovalProcessPage() {
  const fields: MasterField<ApprovalStepForm>[] = [
    { kind: 'text', name: 'level', label: 'Level', required: true, placeholder: 'College / University / HO' },
    { kind: 'text', name: 'role', label: 'Approver Role', required: true, placeholder: 'Principal / Registrar / HO Officer' },
    { kind: 'text', name: 'action', label: 'Action', required: true, placeholder: 'Verify / Recommend / Approve' },
  ];

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    { field: 'level', header: 'Level', sortable: true },
    { field: 'role', header: 'Approver Role', sortable: true },
    { field: 'action', header: 'Action', sortable: true },
    actionsCol,
  ];

  const rows: ApprovalStepRow[] = [
    { id: 1, level: 'College', role: 'Principal', action: 'Verify & Recommend' },
    { id: 2, level: 'University', role: 'Registrar', action: 'Verify' },
    { id: 3, level: 'HO', role: 'Director', action: 'Final Approval' },
  ];

  return (
    <MasterCrudPage<ApprovalStepForm, ApprovalStepRow>
      title="Grant Approval Process"
      tableTitle="Approval Workflow"
      defaultForm={{ level: '', role: '', action: '' }}
      fields={fields}
      rows={rows}
      columns={columns}
    />
  );
}


