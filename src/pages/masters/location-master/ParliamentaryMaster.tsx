import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Input, Dropdown, Table, type TableColumn } from '../../../ui/shared';

interface ParliamentaryRow {
  id: number;
  state: string;
  parliamentCode: string;
  parliamentName: string;
  isActive: boolean;
}

const states = [
  { label: 'Madhya Pradesh', value: 'MP' },
  { label: 'Maharashtra', value: 'MH' },
];

const dummyParliamentary: ParliamentaryRow[] = [
  { id: 1, state: 'MP', parliamentCode: '01', parliamentName: 'Bhopal', isActive: true },
];

const ParliamentaryMaster: React.FC = () => {
  const [formData, setFormData] = useState({
    state: 'MP' as string | null,
    parliamentCode: '',
    parliamentName: '',
    isActive: true,
  });

  const [rows] = useState<ParliamentaryRow[]>(dummyParliamentary);

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    {
      field: 'state',
      header: 'State',
      sortable: true,
      body: (row: ParliamentaryRow) => states.find((s) => s.value === row.state)?.label ?? row.state,
    },
    { field: 'parliamentCode', header: 'Parliament Code', sortable: true },
    { field: 'parliamentName', header: 'Parliament Name', sortable: true },
    {
      field: 'isActive',
      header: 'Status',
      sortable: true,
      body: (row: ParliamentaryRow) => (
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
    console.log('Parliamentary saved:', formData);
  };

  return (
    <PageLayout title="Parliamentary Master Data">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Dropdown
            label="State"
            required
            value={formData.state}
            options={states}
            onChange={(e) => setFormData({ ...formData, state: e.value })}
            placeholder="Select state"
          />

          <Input
            label="Parliament Code"
            required
            value={formData.parliamentCode}
            onChange={(e) => setFormData({ ...formData, parliamentCode: e.target.value.toUpperCase() })}
            placeholder="e.g. 01"
          />

          <Input
            label="Parliament Name"
            required
            value={formData.parliamentName}
            onChange={(e) => setFormData({ ...formData, parliamentName: e.target.value })}
            placeholder="Enter parliament name"
          />
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Checkbox
              inputId="parliamentActive"
              checked={formData.isActive}
              onChange={(e) => setFormData({ ...formData, isActive: e.checked ?? false })}
            />
            <label htmlFor="parliamentActive" className="text-sm font-medium text-gray-700">
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
            onClick={() => setFormData({ state: 'MP', parliamentCode: '', parliamentName: '', isActive: true })}
          />
        </div>
      </form>

      <div className="mt-8">
        <Table title="Parliamentary List" columns={columns} data={rows} showPagination rowsPerPage={10} />
      </div>
    </PageLayout>
  );
};

export default ParliamentaryMaster;
