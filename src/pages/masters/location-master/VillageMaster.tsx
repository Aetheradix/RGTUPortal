import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Input, Dropdown, Table, type TableColumn } from '../../../ui/shared';

interface VillageRow {
  id: number;
  gramPanchayat: string;
  villageCode: string;
  villageName: string;
  isActive: boolean;
}

const grams = [
  { label: 'Gram 1', value: 'G1' },
  { label: 'Gram 2', value: 'G2' },
];

const dummyVillages: VillageRow[] = [
  { id: 1, gramPanchayat: 'G1', villageCode: 'V01', villageName: 'Village 1', isActive: true },
];

const VillageMaster: React.FC = () => {
  const [formData, setFormData] = useState({
    gramPanchayat: 'G1' as string | null,
    villageCode: '',
    villageName: '',
    isActive: true,
  });

  const [rows] = useState<VillageRow[]>(dummyVillages);

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    {
      field: 'gramPanchayat',
      header: 'Gram Panchayat',
      sortable: true,
      body: (row: VillageRow) => grams.find((g) => g.value === row.gramPanchayat)?.label ?? row.gramPanchayat,
    },
    { field: 'villageCode', header: 'Village Code', sortable: true },
    { field: 'villageName', header: 'Village Name', sortable: true },
    {
      field: 'isActive',
      header: 'Status',
      sortable: true,
      body: (row: VillageRow) => (
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
    console.log('Village saved:', formData);
  };

  return (
    <PageLayout title="Village Master">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Dropdown
            label="Gram Panchayat"
            required
            value={formData.gramPanchayat}
            options={grams}
            onChange={(e) => setFormData({ ...formData, gramPanchayat: e.value })}
            placeholder="Select gram panchayat"
          />

          <Input
            label="Village Code"
            required
            value={formData.villageCode}
            onChange={(e) => setFormData({ ...formData, villageCode: e.target.value.toUpperCase() })}
            placeholder="e.g. V01"
          />

          <Input
            label="Village Name"
            required
            value={formData.villageName}
            onChange={(e) => setFormData({ ...formData, villageName: e.target.value })}
            placeholder="Enter village name"
          />
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Checkbox
              inputId="villageActive"
              checked={formData.isActive}
              onChange={(e) => setFormData({ ...formData, isActive: e.checked ?? false })}
            />
            <label htmlFor="villageActive" className="text-sm font-medium text-gray-700">
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
            onClick={() => setFormData({ gramPanchayat: 'G1', villageCode: '', villageName: '', isActive: true })}
          />
        </div>
      </form>

      <div className="mt-8">
        <Table title="Village List" columns={columns} data={rows} showPagination rowsPerPage={10} />
      </div>
    </PageLayout>
  );
};

export default VillageMaster;
