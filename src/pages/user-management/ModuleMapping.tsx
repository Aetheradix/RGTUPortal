import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { Button } from 'primereact/button';
import { MultiSelect } from 'primereact/multiselect';
import { Table, type TableColumn } from '../../ui/shared';

interface Module {
  id: number;
  moduleName: string;
  mappedUsers: string[];
  status: string;
}

const ModuleMapping: React.FC = () => {
  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

  const availableModules = ['HRMS', 'Finance', 'Library', 'Transport', 'Hostel'];
  const availableUsers = ['Admin User', 'HR Manager', 'Finance Head', 'Librarian', 'Transport Manager'];

  const [moduleMappings] = useState<Module[]>([
    { id: 1, moduleName: 'HRMS', mappedUsers: ['Admin User', 'HR Manager'], status: 'Active' },
    { id: 2, moduleName: 'Finance', mappedUsers: ['Admin User', 'Finance Head'], status: 'Active' },
    { id: 3, moduleName: 'Library', mappedUsers: ['Librarian'], status: 'Active' },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Module mapping:', { selectedModules, selectedUsers });
    // Handle form submission
  };

  return (
    <PageLayout title="Module Mapping">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

          <div>
            <label htmlFor="users" className="block text-sm font-medium text-gray-700 mb-2">
              Select Users <span className="text-red-500">*</span>
            </label>
            <MultiSelect
              id="users"
              value={selectedUsers}
              options={availableUsers}
              onChange={(e) => setSelectedUsers(e.value)}
              className="w-full"
              placeholder="Select users"
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
          title="Module Mappings"
          columns={[
            {
              field: 'id',
              header: 'ID',
              sortable: true,
              style: { width: '80px' },
            },
            {
              field: 'moduleName',
              header: 'Module Name',
              sortable: true,
            },
            {
              field: 'mappedUsers',
              header: 'Mapped Users',
              body: (rowData: Module) => rowData.mappedUsers.join(', '),
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
          data={moduleMappings}
          showPagination={true}
          rowsPerPage={10}
        />
      </div>
    </PageLayout>
  );
};

export default ModuleMapping;
