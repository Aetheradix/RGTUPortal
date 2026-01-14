import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { InputText } from 'primereact/inputtext';
import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';

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
  };

  return (
    <PageLayout title="Create User Level">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="levelName" className="block text-sm font-medium text-gray-700 mb-2">
              User Level Name <span className="text-red-500">*</span>
            </label>
            <InputText
              id="levelName"
              value={formData.levelName}
              onChange={(e) => setFormData({ ...formData, levelName: e.target.value })}
              className="w-full"
              placeholder="Enter user level name"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <InputText
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full"
              placeholder="Enter description"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 ">
          <Button type="submit" label="Save" icon="pi pi-save" className="p-button-primary" />
          <Button type="button" label="Cancel" icon="pi pi-times" className="p-button-secondary" />
        </div>
      </form>

      {/* Data Table */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">User Levels List</h2>
        <DataTable value={userLevels} paginator rows={10} className="p-datatable-sm">
          <Column field="id" header="ID" sortable style={{ width: '80px' }} />
          <Column field="levelName" header="Level Name" sortable />
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

export default CreateUserLevel;
