import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Input, Dropdown, Table, type TableColumn } from '../../../ui/shared';

interface PostOfficeRow {
  id: number;
  district: string;
  officeCode: string;
  officeName: string;
  isActive: boolean;
}

const districts = [
  { label: 'Bhopal', value: 'BPL' },
  { label: 'Raisen', value: 'RSG' },
];

const dummyOffices: PostOfficeRow[] = [
  { id: 1, district: 'BPL', officeCode: '462001', officeName: 'Bhopal GPO', isActive: true },
];

const PostOfficeMaster: React.FC = () => {
  const [formData, setFormData] = useState({
    district: 'BPL' as string | null,
    officeCode: '',
    officeName: '',
    isActive: true,
  });

  const [rows] = useState<PostOfficeRow[]>(dummyOffices);

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    {
      field: 'district',
      header: 'District',
      sortable: true,
      body: (row: PostOfficeRow) => districts.find((d) => d.value === row.district)?.label ?? row.district,
    },
    { field: 'officeCode', header: 'Office Code', sortable: true },
    { field: 'officeName', header: 'Office Name', sortable: true },
    {
      field: 'isActive',
      header: 'Status',
      sortable: true,
      body: (row: PostOfficeRow) => (
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
    console.log('Post office saved:', formData);
  };

  return (
    <PageLayout title="Post Office Master">
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
            label="Office Code"
            required
            value={formData.officeCode}
            onChange={(e) => setFormData({ ...formData, officeCode: e.target.value.toUpperCase() })}
            placeholder="e.g. 462001"
          />

          <Input
            label="Office Name"
            required
            value={formData.officeName}
            onChange={(e) => setFormData({ ...formData, officeName: e.target.value })}
            placeholder="Enter office name"
          />
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Checkbox
              inputId="officeActive"
              checked={formData.isActive}
              onChange={(e) => setFormData({ ...formData, isActive: e.checked ?? false })}
            />
            <label htmlFor="officeActive" className="text-sm font-medium text-gray-700">
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
            onClick={() => setFormData({ district: 'BPL', officeCode: '', officeName: '', isActive: true })}
          />
        </div>
      </form>

      <div className="mt-8">
        <Table title="Post Office List" columns={columns} data={rows} showPagination rowsPerPage={10} />
      </div>
    </PageLayout>
  );
};

export default PostOfficeMaster;
