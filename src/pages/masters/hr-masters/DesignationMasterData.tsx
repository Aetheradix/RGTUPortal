import MasterCrudPage, { type MasterField } from '@/pages/masters/shared/MasterCrudPage';
import type { TableColumn } from '@/ui/shared';
import { actionsCol, statusCol } from '../course-master/sharedColumns';

type DesignationForm = {
  designationCode: string;
  designationName: string;
  designationType: string;
  isGazetted: boolean;
  isActive: boolean;
};

type DesignationRow = DesignationForm & { id: number };

export default function DesignationMasterData() {
  const fields: MasterField<DesignationForm>[] = [
    { kind: 'text', name: 'designationCode', label: 'Designation Code', required: true, toUpperCase: true, maxLength: 10 },
    { kind: 'text', name: 'designationName', label: 'Designation Name', required: true },
    { kind: 'text', name: 'designationType', label: 'Designation Type', placeholder: 'Teaching / Non-Teaching' },
    { kind: 'checkbox', name: 'isGazetted', label: 'Gazetted Post' },
    { kind: 'checkbox', name: 'isActive', label: 'Active' },
  ];

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    { field: 'designationCode', header: 'Desig. Code', sortable: true },
    { field: 'designationName', header: 'Desig. Name', sortable: true },
    { field: 'designationType', header: 'Type', sortable: true },
    {
      field: 'isGazetted',
      header: 'Gazetted',
      sortable: true,
      body: (row: DesignationRow) => (row.isGazetted ? 'Yes' : 'No'),
    },
    statusCol,
    actionsCol,
  ];

  const rows: DesignationRow[] = [
    { id: 1, designationCode: 'ASTPROF', designationName: 'Assistant Professor', designationType: 'Teaching', isGazetted: true, isActive: true },
    { id: 2, designationCode: 'PROF', designationName: 'Professor', designationType: 'Teaching', isGazetted: true, isActive: true },
    { id: 3, designationCode: 'JRCLRK', designationName: 'Junior Clerk', designationType: 'Non-Teaching', isGazetted: false, isActive: true },
  ];

  return (
    <MasterCrudPage<DesignationForm, DesignationRow>
      title="Designation Master Data"
      tableTitle="Designation Master List"
      defaultForm={{
        designationCode: '',
        designationName: '',
        designationType: '',
        isGazetted: false,
        isActive: true,
      }}
      fields={fields}
      rows={rows}
      columns={columns}
    />
  );
}


