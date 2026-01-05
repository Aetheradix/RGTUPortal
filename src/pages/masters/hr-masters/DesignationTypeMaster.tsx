import MasterCrudPage, { type MasterField } from '@/pages/masters/shared/MasterCrudPage';
import type { TableColumn } from '@/ui/shared';
import { actionsCol, statusCol } from '../course-master/sharedColumns';

type DesignationTypeForm = {
  typeCode: string;
  typeName: string;
  orderNo: string;
  isActive: boolean;
};

type DesignationTypeRow = DesignationTypeForm & { id: number };

export default function DesignationTypeMaster() {
  const fields: MasterField<DesignationTypeForm>[] = [
    {
      kind: 'text',
      name: 'typeCode',
      label: 'Designation Type Code',
      required: true,
      toUpperCase: true,
      maxLength: 10,
    },
    {
      kind: 'text',
      name: 'typeName',
      label: 'Designation Type Name',
      required: true,
    },
    {
      kind: 'text',
      name: 'orderNo',
      label: 'Display Order',
      placeholder: '1, 2, 3...',
      maxLength: 3,
    },
    { kind: 'checkbox', name: 'isActive', label: 'Active' },
  ];

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    { field: 'typeCode', header: 'Type Code', sortable: true },
    { field: 'typeName', header: 'Type Name', sortable: true },
    { field: 'orderNo', header: 'Order No', sortable: true },
    statusCol,
    actionsCol,
  ];

  const rows: DesignationTypeRow[] = [
    { id: 1, typeCode: 'TEACH', typeName: 'Teaching', orderNo: '1', isActive: true },
    { id: 2, typeCode: 'NTEACH', typeName: 'Non Teaching', orderNo: '2', isActive: true },
  ];

  return (
    <MasterCrudPage<DesignationTypeForm, DesignationTypeRow>
      title="Designation Type Master"
      tableTitle="Designation Type List"
      defaultForm={{ typeCode: '', typeName: '', orderNo: '', isActive: true }}
      fields={fields}
      rows={rows}
      columns={columns}
    />
  );
}


