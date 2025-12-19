import { Navigate, Route, Routes } from 'react-router-dom';
import { Button } from 'primereact/button';
import MasterCrudPage, { type MasterField } from '@/pages/masters/shared/MasterCrudPage';
import type { TableColumn } from '@/ui/shared';

export default function FacultyMaster() {
  const statusCol: TableColumn = {
    field: 'isActive',
    header: 'Status',
    sortable: true,
    body: (row: any) => (
      <span
        className={`px-2 py-1 rounded text-xs font-medium ${
          row.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}
      >
        {row.isActive ? 'Active' : 'Inactive'}
      </span>
    ),
  };

  const actionsCol: TableColumn = {
    field: '',
    header: 'Actions',
    body: () => (
      <div className="flex gap-2">
        <Button icon="pi pi-pencil" className="p-button-rounded p-button-text p-button-sm" />
        <Button icon="pi pi-trash" className="p-button-rounded p-button-text p-button-danger p-button-sm" />
      </div>
    ),
  };

  // Faculty
  const facultyFields: MasterField<any>[] = [
    { kind: 'text', name: 'facultyCode', label: 'Faculty Code', required: true, toUpperCase: true, maxLength: 10 },
    { kind: 'text', name: 'facultyName', label: 'Faculty Name', required: true },
    { kind: 'checkbox', name: 'isActive', label: 'Active' },
  ];
  const facultyColumns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    { field: 'facultyCode', header: 'Faculty Code', sortable: true },
    { field: 'facultyName', header: 'Faculty Name', sortable: true },
    statusCol,
    actionsCol,
  ];
  const facultyRows = [
    { id: 1, facultyCode: 'SCI', facultyName: 'Science', isActive: true },
    { id: 2, facultyCode: 'ART', facultyName: 'Arts', isActive: true },
  ];

  // Faculty Status
  const facultyStatusFields: MasterField<any>[] = [
    { kind: 'text', name: 'statusCode', label: 'Status Code', required: true, toUpperCase: true, maxLength: 10 },
    { kind: 'text', name: 'statusName', label: 'Status Name', required: true },
    { kind: 'checkbox', name: 'isActive', label: 'Active' },
  ];
  const facultyStatusColumns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    { field: 'statusCode', header: 'Status Code', sortable: true },
    { field: 'statusName', header: 'Status Name', sortable: true },
    statusCol,
    actionsCol,
  ];
  const facultyStatusRows = [
    { id: 1, statusCode: 'ACTIVE', statusName: 'Active', isActive: true },
    { id: 2, statusCode: 'INACTIVE', statusName: 'Inactive', isActive: true },
  ];

  // Office Type
  const officeTypeFields: MasterField<any>[] = [
    { kind: 'text', name: 'officeTypeCode', label: 'Office Type Code', required: true, toUpperCase: true, maxLength: 10 },
    { kind: 'text', name: 'officeTypeName', label: 'Office Type Name', required: true },
    { kind: 'checkbox', name: 'isActive', label: 'Active' },
  ];
  const officeTypeColumns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    { field: 'officeTypeCode', header: 'Office Type Code', sortable: true },
    { field: 'officeTypeName', header: 'Office Type Name', sortable: true },
    statusCol,
    actionsCol,
  ];
  const officeTypeRows = [
    { id: 1, officeTypeCode: 'HO', officeTypeName: 'Head Office', isActive: true },
    { id: 2, officeTypeCode: 'DO', officeTypeName: 'District Office', isActive: true },
  ];

  // Office Name
  const officeTypeOptions = [
    { label: 'Head Office', value: 'HO' },
    { label: 'Division Office', value: 'DIV' },
    { label: 'District Office', value: 'DIS' },
  ];
  const officeNameFields: MasterField<any>[] = [
    { kind: 'dropdown', name: 'officeType', label: 'Office Type', required: true, options: officeTypeOptions },
    { kind: 'text', name: 'officeCode', label: 'Office Code', required: true, toUpperCase: true, maxLength: 15 },
    { kind: 'text', name: 'officeName', label: 'Office Name', required: true },
    { kind: 'checkbox', name: 'isActive', label: 'Active' },
  ];
  const officeNameColumns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    { field: 'officeType', header: 'Office Type', sortable: true },
    { field: 'officeCode', header: 'Office Code', sortable: true },
    { field: 'officeName', header: 'Office Name', sortable: true },
    statusCol,
    actionsCol,
  ];
  const officeNameRows = [
    { id: 1, officeType: 'HO', officeCode: 'HO01', officeName: 'Bhopal Head Office', isActive: true },
    { id: 2, officeType: 'DIS', officeCode: 'DIS01', officeName: 'Bhopal District Office', isActive: true },
  ];

  // Department
  const departmentFields: MasterField<any>[] = [
    { kind: 'text', name: 'departmentCode', label: 'Department Code', required: true, toUpperCase: true, maxLength: 10 },
    { kind: 'text', name: 'departmentName', label: 'Department Name', required: true },
    { kind: 'checkbox', name: 'isActive', label: 'Active' },
  ];
  const departmentColumns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    { field: 'departmentCode', header: 'Department Code', sortable: true },
    { field: 'departmentName', header: 'Department Name', sortable: true },
    statusCol,
    actionsCol,
  ];
  const departmentRows = [
    { id: 1, departmentCode: 'ADM', departmentName: 'Administration', isActive: true },
    { id: 2, departmentCode: 'ACC', departmentName: 'Accounts', isActive: true },
  ];

  // Head Office / Division Office / District Office
  const stateOptions = [
    { label: 'Madhya Pradesh', value: 'MP' },
    { label: 'Maharashtra', value: 'MH' },
  ];
  const divisionOptions = [
    { label: 'Bhopal', value: 'BPL' },
    { label: 'Jabalpur', value: 'JBP' },
  ];
  const districtOptions = [
    { label: 'Bhopal', value: 'BPL' },
    { label: 'Raisen', value: 'RSG' },
  ];

  const headOfficeFields: MasterField<any>[] = [
    { kind: 'dropdown', name: 'state', label: 'State', required: true, options: stateOptions },
    { kind: 'text', name: 'officeCode', label: 'Office Code', required: true, toUpperCase: true, maxLength: 15 },
    { kind: 'text', name: 'officeName', label: 'Head Office Name', required: true },
    { kind: 'checkbox', name: 'isActive', label: 'Active' },
  ];
  const headOfficeColumns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    { field: 'state', header: 'State', sortable: true },
    { field: 'officeCode', header: 'Office Code', sortable: true },
    { field: 'officeName', header: 'Head Office Name', sortable: true },
    statusCol,
    actionsCol,
  ];
  const headOfficeRows = [{ id: 1, state: 'MP', officeCode: 'HO-MP', officeName: 'MP Head Office', isActive: true }];

  const divisionOfficeFields: MasterField<any>[] = [
    { kind: 'dropdown', name: 'division', label: 'Division', required: true, options: divisionOptions },
    { kind: 'text', name: 'officeCode', label: 'Office Code', required: true, toUpperCase: true, maxLength: 15 },
    { kind: 'text', name: 'officeName', label: 'Division Office Name', required: true },
    { kind: 'checkbox', name: 'isActive', label: 'Active' },
  ];
  const divisionOfficeColumns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    { field: 'division', header: 'Division', sortable: true },
    { field: 'officeCode', header: 'Office Code', sortable: true },
    { field: 'officeName', header: 'Division Office Name', sortable: true },
    statusCol,
    actionsCol,
  ];
  const divisionOfficeRows = [
    { id: 1, division: 'BPL', officeCode: 'DIV-BPL', officeName: 'Bhopal Division Office', isActive: true },
  ];

  const districtOfficeFields: MasterField<any>[] = [
    { kind: 'dropdown', name: 'district', label: 'District', required: true, options: districtOptions },
    { kind: 'text', name: 'officeCode', label: 'Office Code', required: true, toUpperCase: true, maxLength: 15 },
    { kind: 'text', name: 'officeName', label: 'District Office Name', required: true },
    { kind: 'checkbox', name: 'isActive', label: 'Active' },
  ];
  const districtOfficeColumns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    { field: 'district', header: 'District', sortable: true },
    { field: 'officeCode', header: 'Office Code', sortable: true },
    { field: 'officeName', header: 'District Office Name', sortable: true },
    statusCol,
    actionsCol,
  ];
  const districtOfficeRows = [
    { id: 1, district: 'BPL', officeCode: 'DIS-BPL', officeName: 'Bhopal District Office', isActive: true },
  ];

  return (
    <Routes>
      <Route index element={<Navigate to="faculty" replace />} />
      <Route
        path="faculty"
        element={
          <MasterCrudPage
            title="Faculty"
            tableTitle="Faculty List"
            defaultForm={{ facultyCode: '', facultyName: '', isActive: true }}
            fields={facultyFields}
            rows={facultyRows}
            columns={facultyColumns}
          />
        }
      />
      <Route
        path="faculty-status"
        element={
          <MasterCrudPage
            title="Faculty Status"
            tableTitle="Faculty Status List"
            defaultForm={{ statusCode: '', statusName: '', isActive: true }}
            fields={facultyStatusFields}
            rows={facultyStatusRows}
            columns={facultyStatusColumns}
          />
        }
      />
      <Route
        path="office-type"
        element={
          <MasterCrudPage
            title="Office Type"
            tableTitle="Office Type List"
            defaultForm={{ officeTypeCode: '', officeTypeName: '', isActive: true }}
            fields={officeTypeFields}
            rows={officeTypeRows}
            columns={officeTypeColumns}
          />
        }
      />
      <Route
        path="office-name"
        element={
          <MasterCrudPage
            title="Office Name"
            tableTitle="Office Name List"
            defaultForm={{ officeType: 'HO', officeCode: '', officeName: '', isActive: true }}
            fields={officeNameFields}
            rows={officeNameRows}
            columns={officeNameColumns}
          />
        }
      />
      <Route
        path="department"
        element={
          <MasterCrudPage
            title="Department"
            tableTitle="Department List"
            defaultForm={{ departmentCode: '', departmentName: '', isActive: true }}
            fields={departmentFields}
            rows={departmentRows}
            columns={departmentColumns}
          />
        }
      />
      <Route
        path="head-office"
        element={
          <MasterCrudPage
            title="Head Office"
            tableTitle="Head Office List"
            defaultForm={{ state: 'MP', officeCode: '', officeName: '', isActive: true }}
            fields={headOfficeFields}
            rows={headOfficeRows}
            columns={headOfficeColumns}
          />
        }
      />
      <Route
        path="division-office"
        element={
          <MasterCrudPage
            title="Division Office"
            tableTitle="Division Office List"
            defaultForm={{ division: 'BPL', officeCode: '', officeName: '', isActive: true }}
            fields={divisionOfficeFields}
            rows={divisionOfficeRows}
            columns={divisionOfficeColumns}
          />
        }
      />
      <Route
        path="district-office"
        element={
          <MasterCrudPage
            title="District Office"
            tableTitle="District Office List"
            defaultForm={{ district: 'BPL', officeCode: '', officeName: '', isActive: true }}
            fields={districtOfficeFields}
            rows={districtOfficeRows}
            columns={districtOfficeColumns}
          />
        }
      />
      <Route path="*" element={<Navigate to="faculty" replace />} />
    </Routes>
  );
}


