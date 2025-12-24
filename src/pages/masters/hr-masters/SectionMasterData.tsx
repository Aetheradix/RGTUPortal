import MasterCrudPage, { type MasterField } from '@/pages/masters/shared/MasterCrudPage';
import type { TableColumn } from '@/ui/shared';
import { actionsCol, statusCol } from '../course-master/sharedColumns';

type HRSectionForm = {
  sectionCode: string;
  sectionName: string;
  description: string;
  isActive: boolean;
};

type HRSectionRow = HRSectionForm & { id: number };

export default function SectionMasterData() {
  const fields: MasterField<HRSectionForm>[] = [
    { kind: 'text', name: 'sectionCode', label: 'Section Code', required: true, toUpperCase: true, maxLength: 10 },
    { kind: 'text', name: 'sectionName', label: 'Section Name', required: true },
    { kind: 'text', name: 'description', label: 'Description', maxLength: 200 },
    { kind: 'checkbox', name: 'isActive', label: 'Active' },
  ];

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    { field: 'sectionCode', header: 'Section Code', sortable: true },
    { field: 'sectionName', header: 'Section Name', sortable: true },
    { field: 'description', header: 'Description' },
    statusCol,
    actionsCol,
  ];

  const rows: HRSectionRow[] = [
    { id: 1, sectionCode: 'ADMIN', sectionName: 'Administration', description: '', isActive: true },
    { id: 2, sectionCode: 'ACCTS', sectionName: 'Accounts', description: '', isActive: true },
    { id: 3, sectionCode: 'EXAM', sectionName: 'Examination', description: '', isActive: true },
  ];

  return (
    <MasterCrudPage<HRSectionForm, HRSectionRow>
      title="Section Master Data"
      tableTitle="Section Master List"
      defaultForm={{ sectionCode: '', sectionName: '', description: '', isActive: true }}
      fields={fields}
      rows={rows}
      columns={columns}
    />
  );
}


