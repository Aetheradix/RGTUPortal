import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { Input, Dropdown, Table, type TableColumn } from '../../../ui/shared';

interface StateRow {
  id: number;
  country: string;
  stateCode: string;
  stateName: string;
  isActive: boolean;
}

const countries = [
  { label: 'India', value: 'IN' },
  { label: 'United States', value: 'US' },
  { label: 'United Kingdom', value: 'UK' },
];

const dummyStates: StateRow[] = [
  { id: 1, country: 'IN', stateCode: 'MP', stateName: 'Madhya Pradesh', isActive: true },
  { id: 2, country: 'IN', stateCode: 'MH', stateName: 'Maharashtra', isActive: true },
  { id: 3, country: 'IN', stateCode: 'RJ', stateName: 'Rajasthan', isActive: false },
];

const StateMaster: React.FC = () => {
  const [formData, setFormData] = useState({
    country: 'IN' as string | null,
    stateCode: '',
    stateName: '',
    isActive: true,
  });

  const [rows] = useState<StateRow[]>(dummyStates);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate with API
    console.log('State saved:', formData);
  };

  const columns: TableColumn[] = [
    {
      field: 'id',
      header: 'ID',
      sortable: true,
      style: { width: '70px' },
    },
    {
      field: 'country',
      header: 'Country',
      sortable: true,
      body: (row: StateRow) => countries.find((x) => x.value === row.country)?.label ?? row.country,
    },
    {
      field: 'stateCode',
      header: 'State Code',
      sortable: true,
    },
    {
      field: 'stateName',
      header: 'State Name',
      sortable: true,
    },
    {
      field: 'isActive',
      header: 'Status',
      sortable: true,
      body: (row: StateRow) => (
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
      field: ''
    },
  ];

  return (
    <PageLayout title="State Master Data">
      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Dropdown
            label="Country"
            required
            value={formData.country}
            options={countries}
            onChange={(e) => setFormData({ ...formData, country: e.value })}
            placeholder="Select country"
          />

          <Input
            label="State Code"
            required
            value={formData.stateCode}
            onChange={(e) => setFormData({ ...formData, stateCode: e.target.value.toUpperCase() })}
            maxLength={5}
            placeholder="e.g. MP"
          />

          <Input
            label="State Name"
            required
            value={formData.stateName}
            onChange={(e) => setFormData({ ...formData, stateName: e.target.value })}
            placeholder="Enter state name"
          />
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Checkbox
              inputId="isActive"
              checked={formData.isActive}
              onChange={(e) => setFormData({ ...formData, isActive: e.checked ?? false })}
            />
            <label htmlFor="isActive" className="text-sm font-medium text-gray-700">
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
            onClick={() =>
              setFormData({
                country: 'IN',
                stateCode: '',
                stateName: '',
                isActive: true,
              })
            }
          />
        </div>
      </form>

      {/* Table */}
      <div className="mt-8">
        <Table
          title="States List"
          columns={columns}
          data={rows}
          showPagination
          rowsPerPage={10}
        />
      </div>
    </PageLayout>
  );
};

export default StateMaster;
