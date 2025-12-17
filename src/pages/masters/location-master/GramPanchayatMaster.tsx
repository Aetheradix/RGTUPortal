import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Input, Dropdown, Table, type TableColumn } from '../../../ui/shared';

interface GramPanchayatRow {
  id: number;
  block: string;
  gramCode: string;
  gramName: string;
  isActive: boolean;
}

const blocks = [
  { label: 'Block 1', value: 'B1' },
  { label: 'Block 2', value: 'B2' },
];

const dummyGram: GramPanchayatRow[] = [
  { id: 1, block: 'B1', gramCode: 'G01', gramName: 'Gram 1', isActive: true },
];

const GramPanchayatMaster: React.FC = () => {
  const [formData, setFormData] = useState({
    block: 'B1' as string | null,
    gramCode: '',
    gramName: '',
    isActive: true,
  });

  const [rows] = useState<GramPanchayatRow[]>(dummyGram);

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    {
      field: 'block',
      header: 'Block',
      sortable: true,
      body: (row: GramPanchayatRow) => blocks.find((b) => b.value === row.block)?.label ?? row.block,
    },
    { field: 'gramCode', header: 'Gram Code', sortable: true },
    { field: 'gramName', header: 'Gram Name', sortable: true },
    {
      field: 'isActive',
      header: 'Status',
      sortable: true,
      body: (row: GramPanchayatRow) => (
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
    console.log('Gram Panchayat saved:', formData);
  };

  return (
    <PageLayout title="Gram Panchayat Master Data">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Dropdown
            label="Block"
            required
            value={formData.block}
            options={blocks}
            onChange={(e) => setFormData({ ...formData, block: e.value })}
            placeholder="Select block"
          />

          <Input
            label="Gram Code"
            required
            value={formData.gramCode}
            onChange={(e) => setFormData({ ...formData, gramCode: e.target.value.toUpperCase() })}
            placeholder="e.g. G01"
          />

          <Input
            label="Gram Name"
            required
            value={formData.gramName}
            onChange={(e) => setFormData({ ...formData, gramName: e.target.value })}
            placeholder="Enter gram name"
          />
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Checkbox
              inputId="gramActive"
              checked={formData.isActive}
              onChange={(e) => setFormData({ ...formData, isActive: e.checked ?? false })}
            />
            <label htmlFor="gramActive" className="text-sm font-medium text-gray-700">
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
            onClick={() => setFormData({ block: 'B1', gramCode: '', gramName: '', isActive: true })}
          />
        </div>
      </form>

      <div className="mt-8">
        <Table title="Gram Panchayat List" columns={columns} data={rows} showPagination rowsPerPage={10} />
      </div>
    </PageLayout>
  );
};

export default GramPanchayatMaster;
