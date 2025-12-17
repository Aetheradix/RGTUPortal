import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Input, Dropdown, Table, type TableColumn } from '../../../ui/shared';

interface NagarNigamRow {
  id: number;
  district: string;
  nigamCode: string;
  nigamName: string;
  isActive: boolean;
}

const districts = [
  { label: 'Bhopal', value: 'BPL' },
  { label: 'Indore', value: 'IND' },
];

const dummyNigam: NagarNigamRow[] = [
  { id: 1, district: 'BPL', nigamCode: 'BNN', nigamName: 'Bhopal Nagar Nigam', isActive: true },
];

const NagarNigamMaster: React.FC = () => {
  const [formData, setFormData] = useState({
    district: 'BPL' as string | null,
    nigamCode: '',
    nigamName: '',
    isActive: true,
  });

  const [rows] = useState<NagarNigamRow[]>(dummyNigam);

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    {
      field: 'district',
      header: 'District',
      sortable: true,
      body: (row: NagarNigamRow) => districts.find((d) => d.value === row.district)?.label ?? row.district,
    },
    { field: 'nigamCode', header: 'Nigam Code', sortable: true },
    { field: 'nigamName', header: 'Nigam Name', sortable: true },
    {
      field: 'isActive',
      header: 'Status',
      sortable: true,
      body: (row: NagarNigamRow) => (
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
    console.log('Nagar Nigam saved:', formData);
  };

  return (
    <PageLayout title="Nagar Nigam Master Data">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Dropdown
            label="District"
            required
            value={formData.district}
            options={districts}
            onChange={(e) => setFormData({ ...formData, district: e.value })}
            placeholder="Select district"
          />

          <Input
            label="Nigam Code"
            required
            value={formData.nigamCode}
            onChange={(e) => setFormData({ ...formData, nigamCode: e.target.value.toUpperCase() })}
            placeholder="e.g. BNN"
          />

          <Input
            label="Nigam Name"
            required
            value={formData.nigamName}
            onChange={(e) => setFormData({ ...formData, nigamName: e.target.value })}
            placeholder="Enter nigam name"
          />
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Checkbox
              inputId="nigamActive"
              checked={formData.isActive}
              onChange={(e) => setFormData({ ...formData, isActive: e.checked ?? false })}
            />
            <label htmlFor="nigamActive" className="text-sm font-medium text-gray-700">
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
            onClick={() => setFormData({ district: 'BPL', nigamCode: '', nigamName: '', isActive: true })}
          />
        </div>
      </form>

      <div className="mt-8">
        <Table title="Nagar Nigam List" columns={columns} data={rows} showPagination rowsPerPage={10} />
      </div>
    </PageLayout>
  );
};

export default NagarNigamMaster;
