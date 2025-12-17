import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Input, Dropdown, Table, type TableColumn } from '../../../ui/shared';

interface NagarPalikaRow {
  id: number;
  district: string;
  palikaCode: string;
  palikaName: string;
  isActive: boolean;
}

const districts = [
  { label: 'Bhopal', value: 'BPL' },
  { label: 'Raisen', value: 'RSG' },
];

const dummyPalika: NagarPalikaRow[] = [
  { id: 1, district: 'RSG', palikaCode: 'RNP', palikaName: 'Raisen Nagar Palika', isActive: true },
];

const NagarPalikaMaster: React.FC = () => {
  const [formData, setFormData] = useState({
    district: 'RSG' as string | null,
    palikaCode: '',
    palikaName: '',
    isActive: true,
  });

  const [rows] = useState<NagarPalikaRow[]>(dummyPalika);

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    {
      field: 'district',
      header: 'District',
      sortable: true,
      body: (row: NagarPalikaRow) => districts.find((d) => d.value === row.district)?.label ?? row.district,
    },
    { field: 'palikaCode', header: 'Palika Code', sortable: true },
    { field: 'palikaName', header: 'Palika Name', sortable: true },
    {
      field: 'isActive',
      header: 'Status',
      sortable: true,
      body: (row: NagarPalikaRow) => (
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
    console.log('Nagar Palika saved:', formData);
  };

  return (
    <PageLayout title="Nagar Palika Master Data">
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
            label="Palika Code"
            required
            value={formData.palikaCode}
            onChange={(e) => setFormData({ ...formData, palikaCode: e.target.value.toUpperCase() })}
            placeholder="e.g. RNP"
          />

          <Input
            label="Palika Name"
            required
            value={formData.palikaName}
            onChange={(e) => setFormData({ ...formData, palikaName: e.target.value })}
            placeholder="Enter palika name"
          />
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Checkbox
              inputId="palikaActive"
              checked={formData.isActive}
              onChange={(e) => setFormData({ ...formData, isActive: e.checked ?? false })}
            />
            <label htmlFor="palikaActive" className="text-sm font-medium text-gray-700">
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
            onClick={() => setFormData({ district: 'RSG', palikaCode: '', palikaName: '', isActive: true })}
          />
        </div>
      </form>

      <div className="mt-8">
        <Table title="Nagar Palika List" columns={columns} data={rows} showPagination rowsPerPage={10} />
      </div>
    </PageLayout>
  );
};

export default NagarPalikaMaster;
