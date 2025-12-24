import MasterCrudPage, { type MasterField } from '@/pages/masters/shared/MasterCrudPage';
import type { TableColumn } from '@/ui/shared';
import { actionsCol, statusCol } from '../course-master/sharedColumns';

type LevelForm = {
  levelCode: string;
  levelName: string;
  isActive: boolean;
};

type LevelRow = LevelForm & { id: number };

export default function LevelMasterData() {
  const fields: MasterField<LevelForm>[] = [
    { kind: 'text', name: 'levelCode', label: 'Level Code', required: true, toUpperCase: true, maxLength: 10 },
    { kind: 'text', name: 'levelName', label: 'Level Name', required: true, placeholder: 'e.g. Level 1' },
    { kind: 'checkbox', name: 'isActive', label: 'Active' },
  ];

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    { field: 'levelCode', header: 'Level Code', sortable: true },
    { field: 'levelName', header: 'Level Name', sortable: true },
    statusCol,
    actionsCol,
  ];

  const rows: LevelRow[] = [
    { id: 1, levelCode: 'L1', levelName: 'Level 1', isActive: true },
    { id: 2, levelCode: 'L2', levelName: 'Level 2', isActive: true },
  ];

  return (
    <MasterCrudPage<LevelForm, LevelRow>
      title="Level Master Data"
      tableTitle="Level Master List"
      defaultForm={{ levelCode: '', levelName: '', isActive: true }}
      fields={fields}
      rows={rows}
      columns={columns}
    />
  );
}


