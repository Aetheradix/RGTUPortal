import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Input, Dropdown, Table, type TableColumn } from '../../../ui/shared';

interface DivisionRow {
  id: number;
  state: string;
  divisionCode: string;
  divisionName: string;
  isActive: boolean;
}

const states = [
  { label: 'Madhya Pradesh', value: 'MP' },
  { label: 'Maharashtra', value: 'MH' },
  { label: 'Rajasthan', value: 'RJ' },
];

const dummyDivisions: DivisionRow[] = [
  { id: 1, state: 'MP', divisionCode: 'BPL', divisionName: 'Bhopal', isActive: true },
  { id: 2, state: 'MP', divisionCode: 'JBP', divisionName: 'Jabalpur', isActive: true },
];

const DivisionMaster: React.FC = () => {
  const [formData, setFormData] = useState({
    state: 'MP' as string | null,
    divisionCode: '',
    divisionName: '',
    isActive: true,
  });

  const [rows] = useState<DivisionRow[]>(dummyDivisions);

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    {
      field: 'state',
      header: 'State',
      sortable: true,
      body: (row: DivisionRow) => states.find((s) => s.value === row.state)?.label ?? row.state,
    },
    { field: 'divisionCode', header: 'Division Code', sortable: true },
    { field: 'divisionName', header: 'Division Name', sortable: true },
    {
      field: 'isActive',
      header: 'Status',
      sortable: true,
      body: (row: DivisionRow) => (
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
    console.log('Division saved:', formData);
  };

  return (
    <PageLayout title="Division Master Data">
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
            label="Division Code"
            required
            value={formData.divisionCode}
            onChange={(e) => setFormData({ ...formData, divisionCode: e.target.value.toUpperCase() })}
            placeholder="e.g. BPL"
          />

          <Input
            label="Division Name"
            required
            value={formData.divisionName}
            onChange={(e) => setFormData({ ...formData, divisionName: e.target.value })}
            placeholder="Enter division name"
          />
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Checkbox
              inputId="divisionActive"
              checked={formData.isActive}
              onChange={(e) => setFormData({ ...formData, isActive: e.checked ?? false })}
            />
            <label htmlFor="divisionActive" className="text-sm font-medium text-gray-700">
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
            onClick={() => setFormData({ state: 'MP', divisionCode: '', divisionName: '', isActive: true })}
          />
        </div>
      </form>

      <div className="mt-8">
        <Table title="Division List" columns={columns} data={rows} showPagination rowsPerPage={10} />
      </div>
    </PageLayout>
  );
};

export default DivisionMaster;
