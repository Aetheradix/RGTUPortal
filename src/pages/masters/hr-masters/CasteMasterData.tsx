import MasterCrudPage, { type MasterField } from '@/pages/masters/shared/MasterCrudPage';
import type { TableColumn } from '@/ui/shared';
import { actionsCol, statusCol } from '../course-master/sharedColumns';

type CasteForm = {
  casteCode: string;
  casteName: string;
  category: string;
  isActive: boolean;
};

type CasteRow = CasteForm & { id: number };

export default function CasteMasterData() {
  const fields: MasterField<CasteForm>[] = [
    { kind: 'text', name: 'casteCode', label: 'Caste Code', required: true, toUpperCase: true, maxLength: 10 },
    { kind: 'text', name: 'casteName', label: 'Caste Name', required: true },
    { kind: 'text', name: 'category', label: 'Category', placeholder: 'GEN / OBC / SC / ST' },
    { kind: 'checkbox', name: 'isActive', label: 'Active' },
  ];

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    { field: 'casteCode', header: 'Caste Code', sortable: true },
    { field: 'casteName', header: 'Caste Name', sortable: true },
    { field: 'category', header: 'Category', sortable: true },
    statusCol,
    actionsCol,
  ];

  const rows: CasteRow[] = [
    { id: 1, casteCode: 'GEN', casteName: 'General', category: 'GEN', isActive: true },
    { id: 2, casteCode: 'OBC', casteName: 'Other Backward Class', category: 'OBC', isActive: true },
    { id: 3, casteCode: 'SC', casteName: 'Scheduled Caste', category: 'SC', isActive: true },
  ];

  return (
    <MasterCrudPage<CasteForm, CasteRow>
      title="Caste Master Data"
      tableTitle="Caste Master List"
      defaultForm={{ casteCode: '', casteName: '', category: '', isActive: true }}
      fields={fields}
      rows={rows}
      columns={columns}
    />
  );
}


