import { Navigate, Route, Routes } from 'react-router-dom';
import { Button } from 'primereact/button';
import MasterCrudPage, { type MasterField } from '@/pages/masters/shared/MasterCrudPage';
import type { TableColumn } from '@/ui/shared';

export default function UniversityMaster() {
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

  // University Type Master
  const uniTypeFields: MasterField<any>[] = [
    { kind: 'text', name: 'typeCode', label: 'University Type Code', required: true, toUpperCase: true, maxLength: 15 },
    { kind: 'text', name: 'typeName', label: 'University Type Name', required: true },
    { kind: 'checkbox', name: 'isActive', label: 'Active' },
  ];
  const uniTypeColumns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    { field: 'typeCode', header: 'Type Code', sortable: true },
    { field: 'typeName', header: 'Type Name', sortable: true },
    statusCol,
    actionsCol,
  ];
  const uniTypeRows = [
    { id: 1, typeCode: 'STATE', typeName: 'State University', isActive: true },
    { id: 2, typeCode: 'CENTRAL', typeName: 'Central University', isActive: true },
  ];

  // University Category Master
  const uniCategoryFields: MasterField<any>[] = [
    { kind: 'text', name: 'categoryCode', label: 'University Category Code', required: true, toUpperCase: true, maxLength: 15 },
    { kind: 'text', name: 'categoryName', label: 'University Category Name', required: true },
    { kind: 'checkbox', name: 'isActive', label: 'Active' },
  ];
  const uniCategoryColumns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    { field: 'categoryCode', header: 'Category Code', sortable: true },
    { field: 'categoryName', header: 'Category Name', sortable: true },
    statusCol,
    actionsCol,
  ];
  const uniCategoryRows = [
    { id: 1, categoryCode: 'GOV', categoryName: 'Government', isActive: true },
    { id: 2, categoryCode: 'PRIVATE', categoryName: 'Private', isActive: true },
  ];

  // University Master
  const uniTypeOptions = [
    { label: 'State University', value: 'STATE' },
    { label: 'Central University', value: 'CENTRAL' },
  ];
  const uniCategoryOptions = [
    { label: 'Government', value: 'GOV' },
    { label: 'Private', value: 'PRIVATE' },
  ];
  const uniFields: MasterField<any>[] = [
    { kind: 'dropdown', name: 'type', label: 'University Type', required: true, options: uniTypeOptions },
    { kind: 'dropdown', name: 'category', label: 'University Category', required: true, options: uniCategoryOptions },
    { kind: 'text', name: 'universityCode', label: 'University Code', required: true, toUpperCase: true, maxLength: 20 },
    { kind: 'text', name: 'universityName', label: 'University Name', required: true },
    { kind: 'checkbox', name: 'isActive', label: 'Active' },
  ];
  const uniColumns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    { field: 'type', header: 'Type', sortable: true },
    { field: 'category', header: 'Category', sortable: true },
    { field: 'universityCode', header: 'University Code', sortable: true },
    { field: 'universityName', header: 'University Name', sortable: true },
    statusCol,
    actionsCol,
  ];
  const uniRows = [
    { id: 1, type: 'STATE', category: 'GOV', universityCode: 'RGU', universityName: 'RGTU University', isActive: true },
  ];

  return (
    <Routes>
      <Route index element={<Navigate to="university-type-master" replace />} />
      <Route
        path="university-type-master"
        element={
          <MasterCrudPage
            title="University Type Master"
            tableTitle="University Types"
            defaultForm={{ typeCode: '', typeName: '', isActive: true }}
            fields={uniTypeFields}
            rows={uniTypeRows}
            columns={uniTypeColumns}
          />
        }
      />
      <Route
        path="university-category-master"
        element={
          <MasterCrudPage
            title="University Category Master"
            tableTitle="University Categories"
            defaultForm={{ categoryCode: '', categoryName: '', isActive: true }}
            fields={uniCategoryFields}
            rows={uniCategoryRows}
            columns={uniCategoryColumns}
          />
        }
      />
      <Route
        path="university-master"
        element={
          <MasterCrudPage
            title="University Master"
            tableTitle="Universities"
            defaultForm={{ type: 'STATE', category: 'GOV', universityCode: '', universityName: '', isActive: true }}
            fields={uniFields}
            rows={uniRows}
            columns={uniColumns}
          />
        }
      />
      <Route path="*" element={<Navigate to="university-type-master" replace />} />
    </Routes>
  );
}


