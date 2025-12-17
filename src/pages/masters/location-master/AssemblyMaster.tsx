import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Input, Dropdown, Table, type TableColumn } from '../../../ui/shared';

interface AssemblyRow {
  id: number;
  parliamentary: string;
  assemblyCode: string;
  assemblyName: string;
  isActive: boolean;
}

const parliaments = [
  { label: 'Bhopal', value: 'BPL' },
];

const dummyAssemblies: AssemblyRow[] = [
  { id: 1, parliamentary: 'BPL', assemblyCode: 'AC01', assemblyName: 'Bhopal Dakshin-Pashchim', isActive: true },
];

const AssemblyMaster: React.FC = () => {
  const [formData, setFormData] = useState({
    parliamentary: 'BPL' as string | null,
    assemblyCode: '',
    assemblyName: '',
    isActive: true,
  });

  const [rows] = useState<AssemblyRow[]>(dummyAssemblies);

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    {
      field: 'parliamentary',
      header: 'Parliamentary',
      sortable: true,
      body: (row: AssemblyRow) => parliaments.find((p) => p.value === row.parliamentary)?.label ?? row.parliamentary,
    },
    { field: 'assemblyCode', header: 'Assembly Code', sortable: true },
    { field: 'assemblyName', header: 'Assembly Name', sortable: true },
    {
      field: 'isActive',
      header: 'Status',
      sortable: true,
      body: (row: AssemblyRow) => (
        <span
          className={`px-2 py-1 rounded text-xs font-medium ${
            row.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}
        >
          {row.isActive ? 'Active' : 'Inactive'}
        </span>
      ),
    },
    {
      header: 'Actions',
      body: () => (
        <div className="flex gap-2">
          <Button icon="pi pi-pencil" className="p-button-rounded p-button-text p-button-sm" />
          <Button icon="pi pi-trash" className="p-button-rounded p-button-text p-button-danger p-button-sm" />
        </div>
      ),
      field: '',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Assembly saved:', formData);
  };

  return (
    <PageLayout title="Assembly Master Data">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Dropdown
            label="Parliamentary"
            required
            value={formData.parliamentary}
            options={parliaments}
            onChange={(e) => setFormData({ ...formData, parliamentary: e.value })}
            placeholder="Select parliamentary"
          />

          <Input
            label="Assembly Code"
            required
            value={formData.assemblyCode}
            onChange={(e) => setFormData({ ...formData, assemblyCode: e.target.value.toUpperCase() })}
            placeholder="e.g. AC01"
          />

          <Input
            label="Assembly Name"
            required
            value={formData.assemblyName}
            onChange={(e) => setFormData({ ...formData, assemblyName: e.target.value })}
            placeholder="Enter assembly name"
          />
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Checkbox
              inputId="assemblyActive"
              checked={formData.isActive}
              onChange={(e) => setFormData({ ...formData, isActive: e.checked ?? false })}
            />
            <label htmlFor="assemblyActive" className="text-sm font-medium text-gray-700">
              Active
            </label>
          </div>
        </div>

        <div className="flex gap-3">
          <Button type="submit" label="Save" icon="pi pi-save" className="p-button-primary" />
          <Button
            type="button"
            label="Reset"
            icon="pi pi-refresh"
            className="p-button-outlined"
            onClick={() => setFormData({ parliamentary: 'BPL', assemblyCode: '', assemblyName: '', isActive: true })}
          />
        </div>
      </form>

      <div className="mt-8">
        <Table title="Assembly List" columns={columns} data={rows} showPagination rowsPerPage={10} />
      </div>
    </PageLayout>
  );
};

export default AssemblyMaster;
