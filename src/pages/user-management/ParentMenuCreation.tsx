import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

interface ParentMenu {
  id: number;
  menuName: string;
  menuCode: string;
  description: string;
  order: number;
  status: string;
}

const ParentMenuCreation: React.FC = () => {
  const [formData, setFormData] = useState({
    menuName: '',
    menuCode: '',
    description: '',
    order: '',
  });

  const [parentMenus] = useState<ParentMenu[]>([
    { id: 1, menuName: 'Dashboard', menuCode: 'DASH', description: 'Main dashboard', order: 1, status: 'Active' },
    { id: 2, menuName: 'Masters', menuCode: 'MAST', description: 'Master data', order: 2, status: 'Active' },
    { id: 3, menuName: 'Reports', menuCode: 'REPT', description: 'All reports', order: 3, status: 'Active' },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <PageLayout title="Parent Menu Creation">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="menuName" className="block text-sm font-medium text-gray-700 mb-2">
              Menu Name <span className="text-red-500">*</span>
            </label>
            <InputText
              id="menuName"
              value={formData.menuName}
              onChange={(e) => setFormData({ ...formData, menuName: e.target.value })}
              className="w-full"
              placeholder="Enter menu name"
              required
            />
          </div>

          <div>
            <label htmlFor="menuCode" className="block text-sm font-medium text-gray-700 mb-2">
              Menu Code <span className="text-red-500">*</span>
            </label>
            <InputText
              id="menuCode"
              value={formData.menuCode}
              onChange={(e) => setFormData({ ...formData, menuCode: e.target.value.toUpperCase() })}
              className="w-full"
              placeholder="Enter menu code"
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

          <div>
            <label htmlFor="order" className="block text-sm font-medium text-gray-700 mb-2">
              Display Order
            </label>
            <InputText
              id="order"
              type="number"
              value={formData.order}
              onChange={(e) => setFormData({ ...formData, order: e.target.value })}
              className="w-full"
              placeholder="Enter display order"
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
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Parent Menus List</h2>
        <DataTable value={parentMenus} paginator rows={10}>
          <Column field="id" header="ID" sortable style={{ width: '80px' }} />
          <Column field="menuName" header="Menu Name" sortable />
          <Column field="menuCode" header="Menu Code" sortable />
          <Column field="description" header="Description" />
          <Column field="order" header="Order" sortable />
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

export default ParentMenuCreation;
