import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { Button } from 'primereact/button';
import { Input } from '../../ui/shared';
import { Table, type TableColumn } from '../../ui/shared';

interface UserLevel {
  id: number;
  levelName: string;
  description: string;
  status: string;
}

const CreateUserLevel: React.FC = () => {
  const [formData, setFormData] = useState({
    levelName: '',
    description: '',
  });

  const [userLevels] = useState<UserLevel[]>([
    { id: 1, levelName: 'Super Admin', description: 'Full system access', status: 'Active' },
    { id: 2, levelName: 'Admin', description: 'Administrative access', status: 'Active' },
    { id: 3, levelName: 'User', description: 'Standard user access', status: 'Active' },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <PageLayout title="Create User Level">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="User Level Name"
            required
            value={formData.levelName}
            onChange={(e) => setFormData({ ...formData, levelName: e.target.value })}
            placeholder="Enter user level name"
          />

          <Input
            label="Description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Enter description"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button type="submit" label="Save" icon="pi pi-save" className="p-button-primary" />
          <Button type="button" label="Cancel" icon="pi pi-times" className="p-button-secondary" />
          <Button type="button" label="Reset" icon="pi pi-refresh" className="p-button-outlined" />
        </div>
      </form>

      {/* Data Table */}
      <div className="mt-8">
        <Table
          title="User Levels List"
          columns={[
            {
              field: 'id',
              header: 'ID',
              sortable: true,
              style: { width: '80px' },
            },
            {
              field: 'levelName',
              header: 'Level Name',
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
          data={userLevels}
          showPagination={true}
          rowsPerPage={10}
        />
      </div>
    </PageLayout>
  );
};

export default CreateUserLevel;
