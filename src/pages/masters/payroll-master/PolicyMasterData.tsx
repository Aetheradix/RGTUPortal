import MasterCrudPage, { type MasterField } from '@/pages/masters/shared/MasterCrudPage';
import type { TableColumn } from '@/ui/shared';
import { actionsCol, statusCol } from '../course-master/sharedColumns';

type PolicyForm = {
  policyCode: string;
  policyName: string;
  description: string;
  isActive: boolean;
};

type PolicyRow = PolicyForm & { id: number };

export default function PolicyMasterData() {
  const fields: MasterField<PolicyForm>[] = [
    { kind: 'text', name: 'policyCode', label: 'Policy Code', required: true, toUpperCase: true, maxLength: 10 },
    { kind: 'text', name: 'policyName', label: 'Policy Name', required: true },
    { kind: 'text', name: 'description', label: 'Description', maxLength: 200 },
    { kind: 'checkbox', name: 'isActive', label: 'Active' },
  ];

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    { field: 'policyCode', header: 'Policy Code', sortable: true },
    { field: 'policyName', header: 'Policy Name', sortable: true },
    { field: 'description', header: 'Description' },
    statusCol,
    actionsCol,
  ];

  const rows: PolicyRow[] = [
    { id: 1, policyCode: 'LEAVE', policyName: 'Leave Encashment', description: '', isActive: true },
    { id: 2, policyCode: 'BONUS', policyName: 'Festival Bonus', description: '', isActive: true },
  ];

  return (
    <MasterCrudPage<PolicyForm, PolicyRow>
      title="Policy Master Data"
      tableTitle="Policy Master List"
      defaultForm={{ policyCode: '', policyName: '', description: '', isActive: true }}
      fields={fields}
      rows={rows}
      columns={columns}
    />
  );
}


