import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Input, Dropdown, Table, type TableColumn } from '../../../ui/shared';

interface JanpadPanchayatRow {
  id: number;
  district: string;
  janpadCode: string;
  janpadName: string;
  isActive: boolean;
}

const districts = [
  { label: 'Bhopal', value: 'BPL' },
  { label: 'Raisen', value: 'RSG' },
];

const dummyJanpad: JanpadPanchayatRow[] = [
  { id: 1, district: 'RSG', janpadCode: 'RJNP', janpadName: 'Raisen Janpad Panchayat', isActive: true },
];

const JanpadPanchayatMaster: React.FC = () => {
  const [formData, setFormData] = useState({
    district: 'RSG' as string | null,
    janpadCode: '',
    janpadName: '',
    isActive: true,
  });

  const [rows] = useState<JanpadPanchayatRow[]>(dummyJanpad);

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    {
      field: 'district',
      header: 'District',
      sortable: true,
      body: (row: JanpadPanchayatRow) => districts.find((d) => d.value === row.district)?.label ?? row.district,
    },
    { field: 'janpadCode', header: 'Janpad Code', sortable: true },
    { field: 'janpadName', header: 'Janpad Name', sortable: true },
    {
      field: 'isActive',
      header: 'Status',
      sortable: true,
      body: (row: JanpadPanchayatRow) => (
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
    console.log('Janpad Panchayat saved:', formData);
  };

  return (
    <PageLayout title="Janpad Panchayat Master Data">
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
            label="Janpad Code"
            required
            value={formData.janpadCode}
            onChange={(e) => setFormData({ ...formData, janpadCode: e.target.value.toUpperCase() })}
            placeholder="e.g. RJNP"
          />

          <Input
            label="Janpad Name"
            required
            value={formData.janpadName}
            onChange={(e) => setFormData({ ...formData, janpadName: e.target.value })}
            placeholder="Enter janpad name"
          />
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Checkbox
              inputId="janpadActive"
              checked={formData.isActive}
              onChange={(e) => setFormData({ ...formData, isActive: e.checked ?? false })}
            />
            <label htmlFor="janpadActive" className="text-sm font-medium text-gray-700">
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
            onClick={() => setFormData({ district: 'RSG', janpadCode: '', janpadName: '', isActive: true })}
          />
        </div>
      </form>

      <div className="mt-8">
        <Table title="Janpad Panchayat List" columns={columns} data={rows} showPagination rowsPerPage={10} />
      </div>
    </PageLayout>
  );
};

export default JanpadPanchayatMaster;
