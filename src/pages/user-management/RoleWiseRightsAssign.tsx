import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { Button } from 'primereact/button';
import { MultiSelect } from 'primereact/multiselect';
import { Dropdown, type DropdownOption } from '../../ui/shared';
import { Table, type TableColumn } from '../../ui/shared';

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

  const roleOptions: DropdownOption[] = roles.map((role) => ({ label: role, value: role }));

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
          <Dropdown
            label="Select Role"
            required
            value={formData.roleName}
            options={roleOptions}
            onChange={(e) => setFormData({ ...formData, roleName: e.value })}
            placeholder="Select role"
          />

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
          <Button
            type="button"
            label="Reset"
            icon="pi pi-refresh"
            className="p-button-outlined"
            onClick={() => setFormData({ roleName: '', selectedForms: [] })}
          />
        </div>
      </form>

      <div className="mt-8">
        <Table
          title="Role Wise Rights Assignments"
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
              field: 'forms',
              header: 'Assigned Forms',
              body: (rowData: RoleRights) => rowData.forms.join(', '),
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
          data={roleRights}
          showPagination={true}
          rowsPerPage={10}
        />
      </div>
    </PageLayout>
  );
};

export default RoleWiseRightsAssign;
