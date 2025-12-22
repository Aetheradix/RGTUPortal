import MasterCrudPage, { type MasterField } from '@/pages/masters/shared/MasterCrudPage';
import type { TableColumn } from '@/ui/shared';
import { actionsCol, statusCol } from '../course-master/sharedColumns';

type OptionalHeadForm = {
  headCode: string;
  headName: string;
  headType: 'EARNING' | 'DEDUCTION' | '';
  isOptional: boolean;
  isActive: boolean;
};

type OptionalHeadRow = OptionalHeadForm & { id: number };

export default function OptionalHeadValueMaster() {
  const fields: MasterField<OptionalHeadForm>[] = [
    { kind: 'text', name: 'headCode', label: 'Head Code', required: true, toUpperCase: true, maxLength: 10 },
    { kind: 'text', name: 'headName', label: 'Head Name', required: true },
    { kind: 'text', name: 'headType', label: 'Head Type (Earning / Deduction)', placeholder: 'EARNING / DEDUCTION' },
    { kind: 'checkbox', name: 'isOptional', label: 'Optional Head' },
    { kind: 'checkbox', name: 'isActive', label: 'Active' },
  ];

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    { field: 'headCode', header: 'Head Code', sortable: true },
    { field: 'headName', header: 'Head Name', sortable: true },
    { field: 'headType', header: 'Type', sortable: true },
    {
      field: 'isOptional',
      header: 'Optional',
      sortable: true,
      body: (row: OptionalHeadRow) => (row.isOptional ? 'Yes' : 'No'),
    },
    statusCol,
    actionsCol,
  ];

  const rows: OptionalHeadRow[] = [
    { id: 1, headCode: 'MED', headName: 'Medical Allowance', headType: 'EARNING', isOptional: true, isActive: true },
    { id: 2, headCode: 'CLUB', headName: 'Club Membership', headType: 'DEDUCTION', isOptional: true, isActive: true },
  ];

  return (
    <MasterCrudPage<OptionalHeadForm, OptionalHeadRow>
      title="Set Earning & Deduction Optional Head Value"
      tableTitle="Optional Earning & Deduction Heads"
      defaultForm={{
        headCode: '',
        headName: '',
        headType: '',
        isOptional: true,
        isActive: true,
      }}
      fields={fields}
      rows={rows}
      columns={columns}
    />
  );
}


