import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

interface Role {
  id: number;
  roleName: string;
  roleCode: string;
  description: string;
  status: string;
}

const RoleCreation: React.FC = () => {
  const [formData, setFormData] = useState({
    roleName: '',
    roleCode: '',
    description: '',
  });

  const [roles] = useState<Role[]>([
    { id: 1, roleName: 'Super Admin', roleCode: 'SUAD', description: 'Super administrator with all privileges', status: 'Active' },
    { id: 2, roleName: 'Admin', roleCode: 'ADMN', description: 'Administrator role', status: 'Active' },
    { id: 3, roleName: 'HR Manager', roleCode: 'HRMG', description: 'Human resource manager', status: 'Active' },
    { id: 4, roleName: 'Finance Manager', roleCode: 'FIMG', description: 'Finance manager role', status: 'Active' },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <PageLayout title="Role Creation">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="roleName" className="block text-sm font-medium text-gray-700 mb-2">
              Role Name <span className="text-red-500">*</span>
            </label>
            <InputText
              id="roleName"
              value={formData.roleName}
              onChange={(e) => setFormData({ ...formData, roleName: e.target.value })}
              className="w-full"
              placeholder="Enter role name"
              required
            />
          </div>

          <div>
            <label htmlFor="roleCode" className="block text-sm font-medium text-gray-700 mb-2">
              Role Code <span className="text-red-500">*</span>
            </label>
            <InputText
              id="roleCode"
              value={formData.roleCode}
              onChange={(e) => setFormData({ ...formData, roleCode: e.target.value.toUpperCase() })}
              className="w-full"
              placeholder="Enter role code"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <InputTextarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full"
              rows={3}
              placeholder="Enter description"
            />
          </div>
        </div>

        <div className="flex gap-3">
          <Button type="submit" label="Save" icon="pi pi-save" className="p-button-primary" />
          <Button type="button" label="Cancel" icon="pi pi-times" className="p-button-secondary" />
          <Button type="button" label="Reset" icon="pi pi-refresh" className="p-button-outlined" />
        </div>
      </form>

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Roles List</h2>
        <DataTable value={roles} paginator rows={10}>
          <Column field="id" header="ID" sortable style={{ width: '80px' }} />
          <Column field="roleName" header="Role Name" sortable />
          <Column field="roleCode" header="Role Code" sortable />
          <Column field="description" header="Description" />
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

export default RoleCreation;
