import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Input, Dropdown, Table, type TableColumn } from '../../../ui/shared';

interface DistrictRow {
  id: number;
  division: string;
  districtCode: string;
  districtName: string;
  isActive: boolean;
}

const divisions = [
  { label: 'Bhopal', value: 'BPL' },
  { label: 'Jabalpur', value: 'JBP' },
];

const dummyDistricts: DistrictRow[] = [
  { id: 1, division: 'BPL', districtCode: 'BPL', districtName: 'Bhopal', isActive: true },
  { id: 2, division: 'BPL', districtCode: 'RSG', districtName: 'Raisen', isActive: true },
];

const DistrictMaster: React.FC = () => {
  const [formData, setFormData] = useState({
    division: 'BPL' as string | null,
    districtCode: '',
    districtName: '',
    isActive: true,
  });

  const [rows] = useState<DistrictRow[]>(dummyDistricts);

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    {
      field: 'division',
      header: 'Division',
      sortable: true,
      body: (row: DistrictRow) => divisions.find((d) => d.value === row.division)?.label ?? row.division,
    },
    { field: 'districtCode', header: 'District Code', sortable: true },
    { field: 'districtName', header: 'District Name', sortable: true },
    {
      field: 'isActive',
      header: 'Status',
      sortable: true,
      body: (row: DistrictRow) => (
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
    console.log('District saved:', formData);
  };

  return (
    <PageLayout title="District Master Data">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Dropdown
            label="Division"
            required
            value={formData.division}
            options={divisions}
            onChange={(e) => setFormData({ ...formData, division: e.value })}
            placeholder="Select division"
          />

          <Input
            label="District Code"
            required
            value={formData.districtCode}
            onChange={(e) => setFormData({ ...formData, districtCode: e.target.value.toUpperCase() })}
            placeholder="e.g. BPL"
          />

          <Input
            label="District Name"
            required
            value={formData.districtName}
            onChange={(e) => setFormData({ ...formData, districtName: e.target.value })}
            placeholder="Enter district name"
          />
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Checkbox
              inputId="districtActive"
              checked={formData.isActive}
              onChange={(e) => setFormData({ ...formData, isActive: e.checked ?? false })}
            />
            <label htmlFor="districtActive" className="text-sm font-medium text-gray-700">
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
            onClick={() => setFormData({ division: 'BPL', districtCode: '', districtName: '', isActive: true })}
          />
        </div>
      </form>

      <div className="mt-8">
        <Table title="District List" columns={columns} data={rows} showPagination rowsPerPage={10} />
      </div>
    </PageLayout>
  );
};

export default DistrictMaster;
