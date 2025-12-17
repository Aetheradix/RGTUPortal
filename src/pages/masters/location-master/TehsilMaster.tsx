import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Input, Dropdown, Table, type TableColumn } from '../../../ui/shared';

interface TehsilRow {
  id: number;
  district: string;
  tehsilCode: string;
  tehsilName: string;
  isActive: boolean;
}

const districts = [
  { label: 'Bhopal', value: 'BPL' },
  { label: 'Raisen', value: 'RSG' },
];

const dummyTehsils: TehsilRow[] = [
  { id: 1, district: 'BPL', tehsilCode: 'HUZ', tehsilName: 'Huzur', isActive: true },
  { id: 2, district: 'RSG', tehsilCode: 'GOU', tehsilName: 'Goharganj', isActive: true },
];

const TehsilMaster: React.FC = () => {
  const [formData, setFormData] = useState({
    district: 'BPL' as string | null,
    tehsilCode: '',
    tehsilName: '',
    isActive: true,
  });

  const [rows] = useState<TehsilRow[]>(dummyTehsils);

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    {
      field: 'district',
      header: 'District',
      sortable: true,
      body: (row: TehsilRow) => districts.find((d) => d.value === row.district)?.label ?? row.district,
    },
    { field: 'tehsilCode', header: 'Tehsil Code', sortable: true },
    { field: 'tehsilName', header: 'Tehsil Name', sortable: true },
    {
      field: 'isActive',
      header: 'Status',
      sortable: true,
      body: (row: TehsilRow) => (
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
    console.log('Tehsil saved:', formData);
  };

  return (
    <PageLayout title="Tehsil Master Data">
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
            label="Tehsil Code"
            required
            value={formData.tehsilCode}
            onChange={(e) => setFormData({ ...formData, tehsilCode: e.target.value.toUpperCase() })}
            placeholder="e.g. HUZ"
          />

          <Input
            label="Tehsil Name"
            required
            value={formData.tehsilName}
            onChange={(e) => setFormData({ ...formData, tehsilName: e.target.value })}
            placeholder="Enter tehsil name"
          />
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Checkbox
              inputId="tehsilActive"
              checked={formData.isActive}
              onChange={(e) => setFormData({ ...formData, isActive: e.checked ?? false })}
            />
            <label htmlFor="tehsilActive" className="text-sm font-medium text-gray-700">
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
            onClick={() => setFormData({ district: 'BPL', tehsilCode: '', tehsilName: '', isActive: true })}
          />
        </div>
      </form>

      <div className="mt-8">
        <Table title="Tehsil List" columns={columns} data={rows} showPagination rowsPerPage={10} />
      </div>
    </PageLayout>
  );
};

export default TehsilMaster;
