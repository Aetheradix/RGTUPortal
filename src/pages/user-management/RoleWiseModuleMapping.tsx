import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { Button } from 'primereact/button';
import { MultiSelect } from 'primereact/multiselect';
import { Dropdown, type DropdownOption } from '../../ui/shared';
import { Table, type TableColumn } from '../../ui/shared';

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

  const roleOptions: DropdownOption[] = roles.map((role) => ({ label: role, value: role }));

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
          <Dropdown
            label="Select Role"
            required
            value={selectedRole}
            options={roleOptions}
            onChange={(e) => setSelectedRole(e.value)}
            placeholder="Select role"
          />

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
          <Button type="button" label="Reset" icon="pi pi-refresh" className="p-button-outlined" />
        </div>
      </form>

      <div className="mt-8">
        <Table
          title="Role Wise Module Mappings"
          columns={[
            {
              field: 'id',
              header: 'ID',
              sortable: true,
              style: { width: '80px' },
            },
            {
              field: 'roleName',
              header: 'Role Name',
              sortable: true,
            },
            {
              field: 'modules',
              header: 'Mapped Modules',
              body: (rowData: RoleModuleMapping) => rowData.modules.join(', '),
            },
            {
              field: 'status',
              header: 'Status',
            },
            {
              header: 'Actions',
              body: () => (
                <div className="flex gap-2">
                  <Button icon="pi pi-pencil" className="p-button-rounded p-button-text p-button-sm" />
                  <Button icon="pi pi-trash" className="p-button-rounded p-button-text p-button-danger p-button-sm" />
                </div>
              ),
            },
          ] as TableColumn[]}
          data={roleModuleMappings}
          showPagination={true}
          rowsPerPage={10}
        />
      </div>
    </PageLayout>
  );
};

export default RoleWiseModuleMapping;
