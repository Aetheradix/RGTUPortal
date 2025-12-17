import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { Button } from 'primereact/button';
import { Input, Textarea, NumberInput } from '../../ui/shared';
import { Table, type TableColumn } from '../../ui/shared';
import { DUMMY_PARENT_MENUS, type ParentMenu } from '../../constants';

const ParentMenuCreation: React.FC = () => {
  const [formData, setFormData] = useState({
    menuName: '',
    menuCode: '',
    description: '',
    order: null as number | null,
  });

  const [parentMenus] = useState<ParentMenu[]>(DUMMY_PARENT_MENUS);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <PageLayout title="Parent Menu Creation">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Menu Name"
            required
            value={formData.menuName}
            onChange={(e) => setFormData({ ...formData, menuName: e.target.value })}
            placeholder="Enter menu name"
          />

          <Input
            label="Menu Code"
            required
            value={formData.menuCode}
            onChange={(e) => setFormData({ ...formData, menuCode: e.target.value.toUpperCase() })}
            placeholder="Enter menu code"
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

          <NumberInput
            label="Display Order"
            value={formData.order}
            onValueChange={(e) => setFormData({ ...formData, order: e.value ?? null })}
            placeholder="Enter display order"
            min={0}
          />
        </div>

        <div className="flex gap-3">
          <Button type="submit" label="Save" icon="pi pi-save" className="p-button-primary" />
          <Button type="button" label="Cancel" icon="pi pi-times" className="p-button-secondary" />
          <Button type="button" label="Reset" icon="pi pi-refresh" className="p-button-outlined" />
        </div>
      </form>

      <div className="mt-8">
        <Table
          title="Parent Menus List"
          columns={[
            {
              field: 'id',
              header: 'ID',
              sortable: true,
              style: { width: '80px' },
            },
            {
              field: 'menuName',
              header: 'Menu Name',
              sortable: true,
            },
            {
              field: 'menuCode',
              header: 'Menu Code',
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
          data={parentMenus}
          showPagination={true}
          rowsPerPage={10}
        />
      </div>
    </PageLayout>
  );
};

export default ParentMenuCreation;
