import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Input, Dropdown, Table, type TableColumn } from '../../../ui/shared';

interface PincodeRow {
  id: number;
  postOffice: string;
  pincode: string;
  areaName: string;
  isActive: boolean;
}

const postOffices = [
  { label: 'Bhopal GPO', value: '462001' },
  { label: 'MP Nagar', value: '462011' },
];

const dummyPincodes: PincodeRow[] = [
  { id: 1, postOffice: '462001', pincode: '462001', areaName: 'Old Bhopal', isActive: true },
];

const PincodeMaster: React.FC = () => {
  const [formData, setFormData] = useState({
    postOffice: '462001' as string | null,
    pincode: '',
    areaName: '',
    isActive: true,
  });

  const [rows] = useState<PincodeRow[]>(dummyPincodes);

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    {
      field: 'postOffice',
      header: 'Post Office',
      sortable: true,
      body: (row: PincodeRow) => postOffices.find((p) => p.value === row.postOffice)?.label ?? row.postOffice,
    },
    { field: 'pincode', header: 'Pincode', sortable: true },
    { field: 'areaName', header: 'Area Name', sortable: true },
    {
      field: 'isActive',
      header: 'Status',
      sortable: true,
      body: (row: PincodeRow) => (
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
    console.log('Pincode saved:', formData);
  };

  return (
    <PageLayout title="Pin Code Master">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Dropdown
            label="Post Office"
            required
            value={formData.postOffice}
            options={postOffices}
            onChange={(e) => setFormData({ ...formData, postOffice: e.value })}
            placeholder="Select post office"
          />

          <Input
            label="Pincode"
            required
            value={formData.pincode}
            onChange={(e) => setFormData({ ...formData, pincode: e.target.value.toUpperCase() })}
            placeholder="e.g. 462001"
          />

          <Input
            label="Area Name"
            required
            value={formData.areaName}
            onChange={(e) => setFormData({ ...formData, areaName: e.target.value })}
            placeholder="Enter area name"
          />
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Checkbox
              inputId="pincodeActive"
              checked={formData.isActive}
              onChange={(e) => setFormData({ ...formData, isActive: e.checked ?? false })}
            />
            <label htmlFor="pincodeActive" className="text-sm font-medium text-gray-700">
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
            onClick={() => setFormData({ postOffice: '462001', pincode: '', areaName: '', isActive: true })}
          />
        </div>
      </form>

      <div className="mt-8">
        <Table title="Pincode List" columns={columns} data={rows} showPagination rowsPerPage={10} />
      </div>
    </PageLayout>
  );
};

export default PincodeMaster;
