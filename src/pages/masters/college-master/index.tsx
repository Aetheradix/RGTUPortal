import { Navigate, Route, Routes } from 'react-router-dom';
import { Button } from 'primereact/button';
import MasterCrudPage, { type MasterField } from '@/pages/masters/shared/MasterCrudPage';
import type { TableColumn } from '@/ui/shared';

export default function CollegeMaster() {
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

  // College Type
  const collegeTypeFields: MasterField<any>[] = [
    { kind: 'text', name: 'typeCode', label: 'College Type Code', required: true, toUpperCase: true, maxLength: 15 },
    { kind: 'text', name: 'typeName', label: 'College Type Name', required: true },
    { kind: 'checkbox', name: 'isActive', label: 'Active' },
  ];
  const collegeTypeColumns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    { field: 'typeCode', header: 'Type Code', sortable: true },
    { field: 'typeName', header: 'Type Name', sortable: true },
    statusCol,
    actionsCol,
  ];
  const collegeTypeRows = [
    { id: 1, typeCode: 'GOV', typeName: 'Government', isActive: true },
    { id: 2, typeCode: 'PRV', typeName: 'Private', isActive: true },
  ];

  // College Category
  const collegeCategoryFields: MasterField<any>[] = [
    { kind: 'text', name: 'categoryCode', label: 'College Category Code', required: true, toUpperCase: true, maxLength: 15 },
    { kind: 'text', name: 'categoryName', label: 'College Category Name', required: true },
    { kind: 'checkbox', name: 'isActive', label: 'Active' },
  ];
  const collegeCategoryColumns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    { field: 'categoryCode', header: 'Category Code', sortable: true },
    { field: 'categoryName', header: 'Category Name', sortable: true },
    statusCol,
    actionsCol,
  ];
  const collegeCategoryRows = [
    { id: 1, categoryCode: 'AIDED', categoryName: 'Aided', isActive: true },
    { id: 2, categoryCode: 'UNAIDED', categoryName: 'Unaided', isActive: true },
  ];

  // College Master
  const typeOptions = [
    { label: 'Government', value: 'GOV' },
    { label: 'Private', value: 'PRV' },
  ];
  const categoryOptions = [
    { label: 'Aided', value: 'AIDED' },
    { label: 'Unaided', value: 'UNAIDED' },
  ];
  const districtOptions = [
    { label: 'Bhopal', value: 'BPL' },
    { label: 'Raisen', value: 'RSG' },
  ];
  const collegeFields: MasterField<any>[] = [
    { kind: 'dropdown', name: 'type', label: 'College Type', required: true, options: typeOptions },
    { kind: 'dropdown', name: 'category', label: 'College Category', required: true, options: categoryOptions },
    { kind: 'dropdown', name: 'district', label: 'District', required: true, options: districtOptions },
    { kind: 'text', name: 'collegeCode', label: 'College Code', required: true, toUpperCase: true, maxLength: 20 },
    { kind: 'text', name: 'collegeName', label: 'College Name', required: true },
    { kind: 'checkbox', name: 'isActive', label: 'Active' },
  ];
  const collegeColumns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    { field: 'type', header: 'Type', sortable: true },
    { field: 'category', header: 'Category', sortable: true },
    { field: 'district', header: 'District', sortable: true },
    { field: 'collegeCode', header: 'College Code', sortable: true },
    { field: 'collegeName', header: 'College Name', sortable: true },
    statusCol,
    actionsCol,
  ];
  const collegeRows = [
    { id: 1, type: 'GOV', category: 'AIDED', district: 'BPL', collegeCode: 'CLG001', collegeName: 'Govt. College Bhopal', isActive: true },
  ];

  // Post Master Data
  const postFields: MasterField<any>[] = [
    { kind: 'text', name: 'postCode', label: 'Post Code', required: true, toUpperCase: true, maxLength: 15 },
    { kind: 'text', name: 'postName', label: 'Post Name', required: true },
    { kind: 'checkbox', name: 'isActive', label: 'Active' },
  ];
  const postColumns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    { field: 'postCode', header: 'Post Code', sortable: true },
    { field: 'postName', header: 'Post Name', sortable: true },
    statusCol,
    actionsCol,
  ];
  const postRows = [
    { id: 1, postCode: 'PRINCIPAL', postName: 'Principal', isActive: true },
    { id: 2, postCode: 'CLERK', postName: 'Clerk', isActive: true },
  ];

  // Class Master Data
  const classFields: MasterField<any>[] = [
    { kind: 'text', name: 'classCode', label: 'Class Code', required: true, toUpperCase: true, maxLength: 15 },
    { kind: 'text', name: 'className', label: 'Class Name', required: true },
    { kind: 'checkbox', name: 'isActive', label: 'Active' },
  ];
  const classColumns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    { field: 'classCode', header: 'Class Code', sortable: true },
    { field: 'className', header: 'Class Name', sortable: true },
    statusCol,
    actionsCol,
  ];
  const classRows = [
    { id: 1, classCode: 'FY', className: 'First Year', isActive: true },
    { id: 2, classCode: 'SY', className: 'Second Year', isActive: true },
  ];

  return (
    <Routes>
      <Route index element={<Navigate to="college-type-master" replace />} />
      <Route
        path="college-type-master"
        element={
          <MasterCrudPage
            title="College Type Master"
            tableTitle="College Types"
            defaultForm={{ typeCode: '', typeName: '', isActive: true }}
            fields={collegeTypeFields}
            rows={collegeTypeRows}
            columns={collegeTypeColumns}
          />
        }
      />
      <Route
        path="college-category-master"
        element={
          <MasterCrudPage
            title="College Category Master"
            tableTitle="College Categories"
            defaultForm={{ categoryCode: '', categoryName: '', isActive: true }}
            fields={collegeCategoryFields}
            rows={collegeCategoryRows}
            columns={collegeCategoryColumns}
          />
        }
      />
      <Route
        path="college-master"
        element={
          <MasterCrudPage
            title="College Master"
            tableTitle="Colleges"
            defaultForm={{ type: 'GOV', category: 'AIDED', district: 'BPL', collegeCode: '', collegeName: '', isActive: true }}
            fields={collegeFields}
            rows={collegeRows}
            columns={collegeColumns}
          />
        }
      />
      <Route
        path="post-master-data"
        element={
          <MasterCrudPage
            title="Post Master Data"
            tableTitle="Posts"
            defaultForm={{ postCode: '', postName: '', isActive: true }}
            fields={postFields}
            rows={postRows}
            columns={postColumns}
          />
        }
      />
      <Route
        path="class-master-data"
        element={
          <MasterCrudPage
            title="Class Master Data"
            tableTitle="Classes"
            defaultForm={{ classCode: '', className: '', isActive: true }}
            fields={classFields}
            rows={classRows}
            columns={classColumns}
          />
        }
      />
      <Route path="*" element={<Navigate to="college-type-master" replace />} />
    </Routes>
  );
}


