import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Input, Dropdown, Table, type TableColumn } from '../../../ui/shared';

interface BlockRow {
  id: number;
  tehsil: string;
  blockCode: string;
  blockName: string;
  isActive: boolean;
}

const tehsils = [
  { label: 'Huzur', value: 'HUZ' },
  { label: 'Goharganj', value: 'GOU' },
];

const dummyBlocks: BlockRow[] = [
  { id: 1, tehsil: 'HUZ', blockCode: 'B1', blockName: 'Block 1', isActive: true },
  { id: 2, tehsil: 'GOU', blockCode: 'B2', blockName: 'Block 2', isActive: true },
];

const BlockMaster: React.FC = () => {
  const [formData, setFormData] = useState({
    tehsil: 'HUZ' as string | null,
    blockCode: '',
    blockName: '',
    isActive: true,
  });

  const [rows] = useState<BlockRow[]>(dummyBlocks);

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    {
      field: 'tehsil',
      header: 'Tehsil',
      sortable: true,
      body: (row: BlockRow) => tehsils.find((t) => t.value === row.tehsil)?.label ?? row.tehsil,
    },
    { field: 'blockCode', header: 'Block Code', sortable: true },
    { field: 'blockName', header: 'Block Name', sortable: true },
    {
      field: 'isActive',
      header: 'Status',
      sortable: true,
      body: (row: BlockRow) => (
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
    console.log('Block saved:', formData);
  };

  return (
    <PageLayout title="Block Master Data">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Dropdown
            label="Tehsil"
            required
            value={formData.tehsil}
            options={tehsils}
            onChange={(e) => setFormData({ ...formData, tehsil: e.value })}
            placeholder="Select tehsil"
          />

          <Input
            label="Block Code"
            required
            value={formData.blockCode}
            onChange={(e) => setFormData({ ...formData, blockCode: e.target.value.toUpperCase() })}
            placeholder="e.g. B1"
          />

          <Input
            label="Block Name"
            required
            value={formData.blockName}
            onChange={(e) => setFormData({ ...formData, blockName: e.target.value })}
            placeholder="Enter block name"
          />
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Checkbox
              inputId="blockActive"
              checked={formData.isActive}
              onChange={(e) => setFormData({ ...formData, isActive: e.checked ?? false })}
            />
            <label htmlFor="blockActive" className="text-sm font-medium text-gray-700">
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
            onClick={() => setFormData({ tehsil: 'HUZ', blockCode: '', blockName: '', isActive: true })}
          />
        </div>
      </form>

      <div className="mt-8">
        <Table title="Block List" columns={columns} data={rows} showPagination rowsPerPage={10} />
      </div>
    </PageLayout>
  );
};

export default BlockMaster;
