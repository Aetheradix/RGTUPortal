import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';
import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';

interface RoleModuleMapping {
  id: number;
  roleName: string;
  modules: string[];
  status: string;
}

const RoleWiseModuleMapping: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [selectedModules, setSelectedModules] = useState<string[]>([]);

  const roles = ['Super Admin', 'Admin', 'HR Manager', 'Finance Manager', 'User'];
  const availableModules = ['HRMS', 'Finance', 'Library', 'Transport', 'Hostel', 'Examinations', 'Admissions'];

  const [roleModuleMappings] = useState<RoleModuleMapping[]>([
    { id: 1, roleName: 'Super Admin', modules: ['HRMS', 'Finance', 'Library', 'Transport', 'Hostel'], status: 'Active' },
    { id: 2, roleName: 'HR Manager', modules: ['HRMS'], status: 'Active' },
    { id: 3, roleName: 'Finance Manager', modules: ['Finance'], status: 'Active' },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Role module mapping:', { selectedRole, selectedModules });
  };

  return (
    <PageLayout title="Role Wise Module Mapping">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
              Select Role <span className="text-red-500">*</span>
            </label>
            <Dropdown
              id="role"
              value={selectedRole}
              options={roles}
              onChange={(e) => setSelectedRole(e.value)}
              className="w-full"
              placeholder="Select role"
              required
            />
          </div>

          <div>
            <label htmlFor="modules" className="block text-sm font-medium text-gray-700 mb-2">
              Select Modules <span className="text-red-500">*</span>
            </label>
            <MultiSelect
              id="modules"
              value={selectedModules}
              options={availableModules}
              onChange={(e) => setSelectedModules(e.value)}
              className="w-full"
              placeholder="Select modules"
              display="chip"
            />
          </div>
        </div>

        <div className="flex gap-3">
          <Button type="submit" label="Map Modules" icon="pi pi-link" className="p-button-primary" />
          <Button type="button" label="Cancel" icon="pi pi-times" className="p-button-secondary" />
          {/* */}
        </div>
      </form>

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Role Wise Module Mappings</h2>
        <DataTable value={roleModuleMappings} paginator rows={10}>
          <Column field="id" header="ID" sortable style={{ width: '80px' }} />
          <Column field="roleName" header="Role Name" sortable />
          <Column
            field="modules"
            header="Mapped Modules"
            body={(rowData: RoleModuleMapping) => rowData.modules.join(', ')}
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

export default RoleWiseModuleMapping;
