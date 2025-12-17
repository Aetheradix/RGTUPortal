import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { Button } from 'primereact/button';
import { Input, Textarea, NumberInput, Dropdown, type DropdownOption } from '../../ui/shared';
import { Table, type TableColumn } from '../../ui/shared';

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
    order: null as number | null,
  });

  const parentMenus = ['Dashboard', 'Masters', 'Reports', 'HRMS', 'Finance'];
  const parentMenuOptions: DropdownOption[] = parentMenus.map((menu) => ({ label: menu, value: menu }));

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
          <Input
            label="Sub Menu Name"
            required
            value={formData.subMenuName}
            onChange={(e) => setFormData({ ...formData, subMenuName: e.target.value })}
            placeholder="Enter sub menu name"
          />

          <Input
            label="Sub Menu Code"
            required
            value={formData.subMenuCode}
            onChange={(e) => setFormData({ ...formData, subMenuCode: e.target.value.toUpperCase() })}
            placeholder="Enter sub menu code"
          />

          <Dropdown
            label="Parent Menu"
            required
            value={formData.parentMenu}
            options={parentMenuOptions}
            onChange={(e) => setFormData({ ...formData, parentMenu: e.value })}
            placeholder="Select parent menu"
          />

          <NumberInput
            label="Display Order"
            value={formData.order}
            onValueChange={(e) => setFormData({ ...formData, order: e.value ?? null })}
            placeholder="Enter display order"
            min={0}
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
          title="Sub Menus List"
          columns={[
            {
              field: 'id',
              header: 'ID',
              sortable: true,
              style: { width: '80px' },
            },
            {
              field: 'subMenuName',
              header: 'Sub Menu Name',
              sortable: true,
            },
            {
              field: 'subMenuCode',
              header: 'Sub Menu Code',
              sortable: true,
            },
            {
              field: 'parentMenu',
              header: 'Parent Menu',
              sortable: true,
            },
            {
              field: 'description',
              header: 'Description',
            },
            {
              field: 'order',
              header: 'Order',
              sortable: true,
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
          data={subMenus}
          showPagination={true}
          rowsPerPage={10}
        />
      </div>
    </PageLayout>
  );
};

export default SubMenuCreation;
