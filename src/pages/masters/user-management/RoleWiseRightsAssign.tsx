import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

interface RoleRights {
  id: number;
  roleName: string;
  forms: string[];
  status: string;
}

const RoleWiseRightsAssign: React.FC = () => {
  const [formData, setFormData] = useState({
    roleName: '',
    selectedForms: [] as string[],
  });

  const roles = ['Super Admin', 'Admin', 'HR Manager', 'Finance Manager', 'User'];
  const availableForms = [
    'User Management',
    'Employee Registration',
    'Payroll',
    'Attendance',
    'Leave Management',
    'Reports',
    'Finance Management',
    'Library Management',
  ];

  const [roleRights] = useState<RoleRights[]>([
    { id: 1, roleName: 'Super Admin', forms: ['User Management', 'Employee Registration', 'Payroll', 'Attendance', 'Leave Management', 'Reports'], status: 'Active' },
    { id: 2, roleName: 'HR Manager', forms: ['Employee Registration', 'Attendance', 'Leave Management'], status: 'Active' },
    { id: 3, roleName: 'Finance Manager', forms: ['Payroll', 'Finance Management', 'Reports'], status: 'Active' },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Role rights:', formData);
  };

  return (
    <PageLayout title="Role Wise Right's Assign">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="roleName" className="block text-sm font-medium text-gray-700 mb-2">
              Select Role <span className="text-red-500">*</span>
            </label>
            <Dropdown
              id="roleName"
              value={formData.roleName}
              options={roles}
              onChange={(e) => setFormData({ ...formData, roleName: e.value })}
              className="w-full"
              placeholder="Select role"
              required
            />
          </div>

          <div>
            <label htmlFor="forms" className="block text-sm font-medium text-gray-700 mb-2">
              Select Forms <span className="text-red-500">*</span>
            </label>
            <MultiSelect
              id="forms"
              value={formData.selectedForms}
              options={availableForms}
              onChange={(e) => setFormData({ ...formData, selectedForms: e.value })}
              className="w-full"
              placeholder="Select forms"
              display="chip"
            />
          </div>
        </div>

        <div className="flex gap-3">
          <Button type="submit" label="Assign Rights" icon="pi pi-save" className="p-button-primary" />
          <Button type="button" label="Cancel" icon="pi pi-times" className="p-button-secondary" />
          <Button type="button" label="Reset" icon="pi pi-refresh" className="p-button-outlined" onClick={() => setFormData({ roleName: '', selectedForms: [] })} /> 
        </div>
      </form>

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Role Wise Rights Assignments</h2>
        <DataTable value={roleRights} paginator rows={10}>
          <Column field="id" header="ID" sortable style={{ width: '80px' }} />
          <Column field="roleName" header="Role Name" sortable />
          <Column
            field="forms"
            header="Assigned Forms"
            body={(rowData: RoleRights) => rowData.forms.join(', ')}
          />
          <Column field="status" header="Status" />
          <Column
            header="Actions"
            body={() => (
              <div className="flex gap-2">
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-text p-button-sm" />
                <Button icon="pi pi-trash" className="p-button-rounded p-button-text p-button-danger p-button-sm" />
              </div>
            )}
          />
        </DataTable>
      </div>
    </PageLayout>
  );
};

export default RoleWiseRightsAssign;
