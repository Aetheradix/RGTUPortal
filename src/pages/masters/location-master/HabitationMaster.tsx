import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Input, Dropdown, Table, type TableColumn } from '../../../ui/shared';

interface HabitationRow {
  id: number;
  village: string;
  habitationCode: string;
  habitationName: string;
  isActive: boolean;
}

const villages = [
  { label: 'Village 1', value: 'V1' },
  { label: 'Village 2', value: 'V2' },
];

const dummyHabitations: HabitationRow[] = [
  { id: 1, village: 'V1', habitationCode: 'H01', habitationName: 'Habitation 1', isActive: true },
];

const HabitationMaster: React.FC = () => {
  const [formData, setFormData] = useState({
    village: 'V1' as string | null,
    habitationCode: '',
    habitationName: '',
    isActive: true,
  });

  const [rows] = useState<HabitationRow[]>(dummyHabitations);

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    {
      field: 'village',
      header: 'Village',
      sortable: true,
      body: (row: HabitationRow) => villages.find((v) => v.value === row.village)?.label ?? row.village,
    },
    { field: 'habitationCode', header: 'Habitation Code', sortable: true },
    { field: 'habitationName', header: 'Habitation Name', sortable: true },
    {
      field: 'isActive',
      header: 'Status',
      sortable: true,
      body: (row: HabitationRow) => (
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
    console.log('Habitation saved:', formData);
  };

  return (
    <PageLayout title="Habitation Master Data">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Dropdown
            label="Village"
            required
            value={formData.village}
            options={villages}
            onChange={(e) => setFormData({ ...formData, village: e.value })}
            placeholder="Select village"
          />

          <Input
            label="Habitation Code"
            required
            value={formData.habitationCode}
            onChange={(e) => setFormData({ ...formData, habitationCode: e.target.value.toUpperCase() })}
            placeholder="e.g. H01"
          />

          <Input
            label="Habitation Name"
            required
            value={formData.habitationName}
            onChange={(e) => setFormData({ ...formData, habitationName: e.target.value })}
            placeholder="Enter habitation name"
          />
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Checkbox
              inputId="habitationActive"
              checked={formData.isActive}
              onChange={(e) => setFormData({ ...formData, isActive: e.checked ?? false })}
            />
            <label htmlFor="habitationActive" className="text-sm font-medium text-gray-700">
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
            onClick={() => setFormData({ village: 'V1', habitationCode: '', habitationName: '', isActive: true })}
          />
        </div>
      </form>

      <div className="mt-8">
        <Table title="Habitation List" columns={columns} data={rows} showPagination rowsPerPage={10} />
      </div>
    </PageLayout>
  );
};

export default HabitationMaster;
