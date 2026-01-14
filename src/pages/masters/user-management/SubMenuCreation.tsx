import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';

interface SubMenu {
  id: number;
  subMenuName: string;
  subMenuCode: string;
  parentMenu: string;
  description: string;
  order: number;
  status: string;
}

const SubMenuCreation: React.FC = () => {
  const [formData, setFormData] = useState({
    subMenuName: '',
    subMenuCode: '',
    parentMenu: '',
    description: '',
    order: '',
  });

  const parentMenus = ['Dashboard', 'Masters', 'Reports', 'HRMS', 'Finance'];

  const [subMenus] = useState<SubMenu[]>([
    { id: 1, subMenuName: 'User Management', subMenuCode: 'UMGT', parentMenu: 'Masters', description: 'User management module', order: 1, status: 'Active' },
    { id: 2, subMenuName: 'Location Master', subMenuCode: 'LOCM', parentMenu: 'Masters', description: 'Location master data', order: 2, status: 'Active' },
    { id: 3, subMenuName: 'Employee Reports', subMenuCode: 'EMPR', parentMenu: 'Reports', description: 'Employee related reports', order: 1, status: 'Active' },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <PageLayout title="Sub Menu Creation">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="subMenuName" className="block text-sm font-medium text-gray-700 mb-2">
              Sub Menu Name <span className="text-red-500">*</span>
            </label>
            <InputText
              id="subMenuName"
              value={formData.subMenuName}
              onChange={(e) => setFormData({ ...formData, subMenuName: e.target.value })}
              className="w-full"
              placeholder="Enter sub menu name"
              required
            />
          </div>

          <div>
            <label htmlFor="subMenuCode" className="block text-sm font-medium text-gray-700 mb-2">
              Sub Menu Code <span className="text-red-500">*</span>
            </label>
            <InputText
              id="subMenuCode"
              value={formData.subMenuCode}
              onChange={(e) => setFormData({ ...formData, subMenuCode: e.target.value.toUpperCase() })}
              className="w-full"
              placeholder="Enter sub menu code"
              required
            />
          </div>

          <div>
            <label htmlFor="parentMenu" className="block text-sm font-medium text-gray-700 mb-2">
              Parent Menu <span className="text-red-500">*</span>
            </label>
            <Dropdown
              id="parentMenu"
              value={formData.parentMenu}
              options={parentMenus}
              onChange={(e) => setFormData({ ...formData, parentMenu: e.value })}
              className="w-full"
              placeholder="Select parent menu"
              required
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
          {/* */}
        </div>
      </form>

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Sub Menus List</h2>
        <DataTable value={subMenus} paginator rows={10}>
          <Column field="id" header="ID" sortable style={{ width: '80px' }} />
          <Column field="subMenuName" header="Sub Menu Name" sortable />
          <Column field="subMenuCode" header="Sub Menu Code" sortable />
          <Column field="parentMenu" header="Parent Menu" sortable />
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

export default SubMenuCreation;
