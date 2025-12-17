import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { Button } from 'primereact/button';
import { Input, Textarea } from '../../ui/shared';
import { Table, type TableColumn } from '../../ui/shared';

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
          <Input
            label="Role Name"
            required
            value={formData.roleName}
            onChange={(e) => setFormData({ ...formData, roleName: e.target.value })}
            placeholder="Enter role name"
          />

          <Input
            label="Role Code"
            required
            value={formData.roleCode}
            onChange={(e) => setFormData({ ...formData, roleCode: e.target.value.toUpperCase() })}
            placeholder="Enter role code"
          />

          <div className="md:col-span-2">
            <Textarea
              label="Description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
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
        <Table
          title="Roles List"
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
              field: 'roleCode',
              header: 'Role Code',
              sortable: true,
            },
            {
              field: 'description',
              header: 'Description',
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
          data={roles}
          showPagination={true}
          rowsPerPage={10}
        />
      </div>
    </PageLayout>
  );
};

export default RoleCreation;
