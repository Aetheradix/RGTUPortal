import MasterCrudPage, { type MasterField } from '@/pages/masters/shared/MasterCrudPage';
import type { TableColumn } from '@/ui/shared';
import { actionsCol, statusCol } from '../course-master/sharedColumns';

type SectionForm = {
  sectionCode: string;
  sectionName: string;
  isActive: boolean;
};

type SectionRow = SectionForm & { id: number };

export default function SectionMaster() {
  const fields: MasterField<SectionForm>[] = [
    {
      kind: 'text',
      name: 'sectionCode',
      label: 'Section Code',
      required: true,
      toUpperCase: true,
      maxLength: 10,
    },
    {
      kind: 'text',
      name: 'sectionName',
      label: 'Section Name',
      required: true,
    },
    { kind: 'checkbox', name: 'isActive', label: 'Active' },
  ];

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    { field: 'sectionCode', header: 'Section Code', sortable: true },
    { field: 'sectionName', header: 'Section Name', sortable: true },
    statusCol,
    actionsCol,
  ];

  const rows: SectionRow[] = [
    { id: 1, sectionCode: 'BASIC', sectionName: 'Basic Pay', isActive: true },
    { id: 2, sectionCode: 'DA', sectionName: 'Dearness Allowance', isActive: true },
    { id: 3, sectionCode: 'PF', sectionName: 'Provident Fund', isActive: true },
  ];

  return (
    <MasterCrudPage<SectionForm, SectionRow>
      title="Earning And Deduction Master"
      tableTitle="Earning And Deduction Head List"
      defaultForm={{ sectionCode: '', sectionName: '', isActive: true }}
      fields={fields}
      rows={rows}
      columns={columns}
    />
  );
}


