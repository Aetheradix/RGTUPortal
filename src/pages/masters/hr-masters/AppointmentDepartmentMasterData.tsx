import MasterCrudPage, { type MasterField } from '@/pages/masters/shared/MasterCrudPage';
import type { TableColumn } from '@/ui/shared';
import { actionsCol, statusCol } from '../course-master/sharedColumns';

type AppointmentDeptForm = {
  departmentCode: string;
  departmentName: string;
  isTeaching: boolean;
  isActive: boolean;
};

type AppointmentDeptRow = AppointmentDeptForm & { id: number };

export default function AppointmentDepartmentMasterData() {
  const fields: MasterField<AppointmentDeptForm>[] = [
    { kind: 'text', name: 'departmentCode', label: 'Department Code', required: true, toUpperCase: true, maxLength: 10 },
    { kind: 'text', name: 'departmentName', label: 'Department Name', required: true },
    { kind: 'checkbox', name: 'isTeaching', label: 'Teaching Department' },
    { kind: 'checkbox', name: 'isActive', label: 'Active' },
  ];

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    { field: 'departmentCode', header: 'Dept. Code', sortable: true },
    { field: 'departmentName', header: 'Department Name', sortable: true },
    {
      field: 'isTeaching',
      header: 'Type',
      sortable: true,
      body: (row: AppointmentDeptRow) => (row.isTeaching ? 'Teaching' : 'Non-Teaching'),
    },
    statusCol,
    actionsCol,
  ];

  const rows: AppointmentDeptRow[] = [
    { id: 1, departmentCode: 'PHY', departmentName: 'Physics', isTeaching: true, isActive: true },
    { id: 2, departmentCode: 'ADMIN', departmentName: 'Administration', isTeaching: false, isActive: true },
  ];

  return (
    <MasterCrudPage<AppointmentDeptForm, AppointmentDeptRow>
      title="Appointment Department Master Data"
      tableTitle="Appointment Department List"
      defaultForm={{ departmentCode: '', departmentName: '', isTeaching: true, isActive: true }}
      fields={fields}
      rows={rows}
      columns={columns}
    />
  );
}


